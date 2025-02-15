const teas=["green tea","black tea","tea","oolang tea","white tea","herbal tea","bubble tea"];
console.log(teas);

teas.push("chamomile tea");

const index=teas.indexOf("oolang tea");
if(index>-1)
{
    teas.splice(index,1);
}
//console.log(teas);

const caffteas=teas.filter((tea)=>tea!=="herbal tea");

console.log(caffteas);


const test=["🥚","🐔"];
console.log(test.sort());

for(let i=0;i<teas.length;i++)
{
    console.log(teas[i]);
}




let caffmyteas=0
for(let i=0;i<teas.length;i++)
{
    if(teas[i]!=="herbal tea")
    {
        caffmyteas++
    }
}

const upperteas=[""]
for(let i=0;i<teas.length;i++)
{
    upperteas.push(teas[i].toUpperCase())

}
console.log(upperteas)

let longesttea="";
for(let i=0;i<teas.length;i++)
{
    if(teas[i].length>longesttea.length)

        {
            longesttea=teas[i]
        }
}
console.log(longesttea);


const reversearr=[]
for(let i=teas.length-1;i>=0;i--)
{
    reversearr.push(teas[i])
}
console.log(reversearr)