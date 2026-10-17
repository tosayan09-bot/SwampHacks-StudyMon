import math
import random
from fastapi import FastAPI
app=FastAPI()
#Each class is a pokemon
    #Going to class gives your pokemon some XP. XP is used to gain health.
    #Missing a class makes you lose 15 XP coins 
    #Studying for the class for one hour gives you 10 XP
    #Round Robin Tournament System(Calendar)

shop={"healthpotion":(10,'regain 20 percent health'), "tripleattack":(30,"attack thrice instantly"), "rockhard":(20,"increase defense by 10 percent for rest of fight")}

class Studymon:
    
    def __init__(self, course,name,hp,atk,defn,xp=0,level=1,gold=100):
        self.course=course
        self.name=name
        self.xp=xp
        self.daily_attendance=False
        self.level=level
        self.gold=gold
        self.stats={"health":hp*(1.5)**level,"attack":atk*(1.5)**level,"def":defn*(1.05)**level, "atkspeed":0.2, "itemwait":1}
        self.initstats=dict(self.stats)
        self.items=[]
      
    def attendance_check(self, dailyAttendance):
        self.daily_attendance=dailyAttendance
        
    def xpup(self,amount):
        #check for xp events
        if self.daily_attendance:
            self.xp+=amount
    def goldup(self,amount):
        #if study for 1 hr, get 10 gold for that study mon
        pass
    def goldspend(self,item):
        if self.gold>shop[item][0]:
            self.items.append(item)
            print(f"success!: {self.items}")
                
    def levelupcheck(self):
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
            
            
        print(f"level after check {self.level}")
    
    def attack(self,opponent):
        dmg=int((1.5-random.random())*self.stats["attack"])-(1-opponent.stats["def"]/100)
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
            



     
def battle(player,opponent):
    pinitstate=dict(player.stats)
    print(f"before battle: {pinitstate}")
    oinitstate=dict(opponent.stats)

    turn=1
    battletime=0
    battlelog=[("attacker","attackerhealh","attackerdmg","opponenthealth","turn")]
    prio,slow=player,opponent
    if player.stats["atkspeed"]>=opponent.stats["atkspeed"]:
         prio,slow=opponent,player

    usable=True
         
    
    while player.stats["health"]>0 and opponent.stats["health"]>0:

        if turn*player.stats["atkspeed"]<=turn*opponent.stats["atkspeed"]:
                pdmg=player.attack(opponent)
                battlelog.append((player.name,player.stats["health"],pdmg,opponent.stats["health"],turn))
        
        else:
            odmg=opponent.attack(player)
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
    
    player.stats=pinitstate
    print(f"after:{player.stats}")
    opponent.stats=oinitstate
    return battlelog
@app.get("/") 
def hello():
    return("test")

    
        

pet1=Studymon("Math","Pikachu",hp=100,atk=10,defn=10)
pet2=Studymon("Math","Blastoise",hp=1000,atk=10,defn=10)
pet1.attendance_check(True)
pet1.levelupcheck()
pet1.xpup(25)
print(pet1.xp)
pet1.levelupcheck()
pet1.goldspend("healthpotion")

battle(pet1,pet2)
