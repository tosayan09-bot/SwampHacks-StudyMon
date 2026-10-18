import math
import random
from fastapi import FastAPI
from fastapi import HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
app=FastAPI()
origins = [
    "https://vercel.com/swamphacks26/swamp-hacks-study-mon/5QgJ4bNH2VMCTjdVQibDA8KpHowL",  # Your Vercel domain
    "http://localhost:5173",             # Local Vite dev server (if applicable)
    "http://localhost:3000",             # Local React dev server (if applicable)
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
#Each class is a pokemon
    #Going to class gives your pokemon some XP. XP is used to gain health.
    #Missing a class makes you lose 15 XP coins 
    #Studying for the class for one hour gives you 10 XP
    #Round Robin Tournament System(Calendar)

shop={"healthpotion":(10,'regain 20 percent health'), "tripleattack":(30,"attack thrice instantly"), "rockhard":(20,"increase defense by 10 percent for rest of fight")}

class petInputData(BaseModel):
    name:str
    course:str
class Studymon:
#initalize    
    def __init__(self, course,name,hp=100,atk=10,defn=10,xp=0,level=1,gold=100):
        self.course=course
        self.name=name
        self.xp=xp
        self.daily_attendance=False
        self.level=level
        self.gold=gold
        self.atk=atk
        self.defn=defn
        self.hp=hp
        self.stats={"health":hp*(1.5)**level,"attack":atk*(1.5)**level,"def":defn*(1.05)**level, "atkspeed":0.2, "itemwait":1}
        self.initstats=dict(self.stats)
        self.items=[]
    def to_dict(self):
        return {"name": self.name,
            "course": self.course,
            "level": self.level,
            "xp": self.xp,
            "gold": self.gold,
            "items": self.items,
            "health": round(self.stats["health"]),
            "attack": round(self.stats["attack"]),
            "defense": round(self.stats["def"], 1)
            }


#habit stuff    
    def attendance_check(self, dailyAttendance):
        self.daily_attendance=dailyAttendance
#RPG stuff        
    def xpup(self,amount):
        #check for xp events
        if self.daily_attendance:
            self.xp+=amount
    def goldup(self,amount):
        #if study for 1 hr, get 10 gold for that study mon
        #example function (asher)
        #if amount<0:
        #   raise ValueError("Gold can't be negative")
        #self.gold+=amount * 10
        pass
    def goldspend(self,item):
        if self.gold>shop[item][0]:
            self.items.append(item)
            print(f"success!: {self.items}")
    def statchange(self):
        self.stats["health"]=self.hp*(1.5)**self.level
        self.stats["def"]=self.defn*(1.05)**self.level
        self.stats["attack"]=self.atk*(1.5)**self.level            
    def levelcheck(self):
        reqxp=10
        print(f"level before check {self.level}")
        print(f"reqxp: {reqxp}")
        print(f"xp: {self.xp}")
        xpforleveling=self.xp
        while True:
            
            reqxp=10*1.5**(self.level-1)
            if xpforleveling>=reqxp:
                xpforleveling-=reqxp
                self.level+=1
            else:
                levelupprogress=xpforleveling
                break
            #compare xp to required xp 
            #if bigger, add one level
            #keep going until you run out of xp to lecel
            
        self.statchange()    
        print(f"level after check {self.level}")
    
    def attack(self,opponent):
        dmg=int((1.5-random.random())*self.stats["attack"])*(1-opponent.stats["def"]/100)
        opponent.stats["health"]-= dmg
        return dmg
    def useitem(self,item,opponent):
        if item=="healthpotion":
            self.stats["health"]+=self.initstats["health"]*0.2
        if item=="tripleattack":
                for i in range(3):
                    self.attack(opponent)
        if item=="rockhard":
            self.stats["defense"]*=1.1

            




@app.post("/pets")
def create_pet(data: petInputData):
    key = data.name.lower()
    pet = Studymon(data.course, data.name)
    studymons[key] = pet
    return pet.to_dict()
@app.get("/pets")
def list_pets():
    return [pet.to_dict() for pet in studymons.values()]
@app.put("/pets")
def update_xp(studymon: str, amount: int):
    pet = studymons.get(studymon.lower())
    pet.xp+=amount
    pet.levelcheck()
    return pet.to_dict()



def battle(player,opponent):
    pinitstate=dict(player.stats)
    print(f"before battle: {pinitstate}")
    oinitstate=dict(opponent.stats)

    winner=""
    turn=1
    battletime=0
    battlelog=[("attacker","attackerhealh","attackerdmg","opponenthealth","turn")]
    prio,slow=player,opponent
    if player.stats["atkspeed"]>=opponent.stats["atkspeed"]:
         prio,slow=opponent,player

    usable=True
         
    
    while player.stats["health"]>0 and opponent.stats["health"]>0:

        
        pdmg=prio.attack(slow)
        battlelog.append((player.name,player.stats["health"],pdmg,opponent.stats["health"],turn))
        odmg=slow.attack(prio)
        battlelog.append((opponent.name,opponent.stats["health"],odmg,player.stats["health"],turn))
        if usable:
            if turn*prio.stats["atkspeed"]>=player.stats["itemwait"] and prio.items:
                prio.useitem(prio.items(0),slow)
            if turn*slow.stats["atkspeed"]>=slow.stats["itemwait"] and slow.items:
                slow.useitem(slow.items(0),prio)
        

        usable = False
        #print(f"{player.name} attacked {opponent.name}! {opponent.name} took {pdmg} damage, and is at {opponent.stats['health']} health!")        
        #print(f"{opponent.name} attacked {player.name}! {player.name} took {odmg} damage, and is at {player.stats['health']} health!")

        turn+=1
    if player.stats["health"]<=0 and opponent.stats["health"]>0:
        winner=opponent
    elif opponent.stats["health"]<=0 and player.stats["health"]>0:
        winner=player
    else:
        winner.name="None"
    battlelog.append(winner.name)


    
    player.stats=pinitstate
    print(f"after:{player.stats}")
    opponent.stats=oinitstate
    return battlelog

@app.post("/battle/{pstudymon}/{ostudymon}") 
def battle_endpoint(pstudymon: str, ostudymon: str):
    player = studymons.get(pstudymon.lower())
    opponent = studymons.get(ostudymon.lower())
    if not player or not opponent:
        raise HTTPException(status_code=404, detail="Studymon not found")
    return battle(player,opponent)


    
        

pet1=Studymon("Math","Pikachu")
pet2=Studymon("Math","Blastoise")
studymons={"pikachu": pet1, "blastoise": pet2}

pet1.attendance_check(True)
pet1.levelcheck()
pet1.xpup(25)
print(pet1.xp)
pet1.levelcheck()
print(pet1.to_dict())
pet1.goldspend("healthpotion")

x=battle(pet1,pet2)
print(x)
