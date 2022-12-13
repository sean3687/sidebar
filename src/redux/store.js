
import { createStore } from "redux";
import { HiOutlineDocumentText, HiOutlineVideoCamera } from 'react-icons/hi2';

const ProgramDatabase = [
    {
     name: "Week 1",
     number: 5,
     subSteps:[
        {
        name: "Watch video on personal finance ",
        icon:<HiOutlineVideoCamera/>,
        style:"VIDEO",
        time:"2 MIN",
        finished: true,
     },{
        name: "Create savings goal",
        icon:<HiOutlineDocumentText/>,
        style:"TEXT",
        finished: true,
     },{
        name: "Automate savings",
        icon:<HiOutlineDocumentText/>,
        style:"TEXT",
        finished: true,
     },{
        name: "Vacation fund",
        icon:<HiOutlineDocumentText/>,
        style:"TEXT",
        finished: false,
     },
     {
        name: "Vacation fund",
        icon:<HiOutlineDocumentText/>,
        style:"TEXT",
        finished: false,
     }
     ],
     
    },
    {
        name: "Week 2",
        number: 3,
        subSteps:[
           {
           name: "Watch video on personal finance 2",
           icon:<HiOutlineVideoCamera/>,
           style:"VIDEO",
           time:'2 MIN',
           finished: true,
        },{
           name: "Create savings goa2l",
           icon:<HiOutlineDocumentText/>,
           style:"TEXT",
           finished: true,
        },{
           name: "Automate savings2",
           icon:<HiOutlineDocumentText/>,
           style:"TEXT",
           finished: true,
        }
        ],
    },
    {
        name: "Week 3",
        number: 4,
        subSteps:[
           {
           name: "Watch video on personal finance3 ",
           icon:<HiOutlineVideoCamera/>,
           style:"VIDEO",
           time:'2 MIN',
           finished: true,
        },{
           name: "Create savings goal3",
           icon:<HiOutlineDocumentText/>,
           style:"TEXT",
           finished: true,
        },{
           name: "Automate savings3",
           icon:<HiOutlineDocumentText/>,
           style:"TEXT",
           finished: true,
        },{
           name: "Vacation fund3",
           icon:<HiOutlineDocumentText/>,
           style:"TEXT",
           finished: true,
        }
        ],
    },
    {
        name: "Week 4",
        number: 4,
        subSteps:[
           {
           name: "Watch video on personal finance4 ",
           icon:<HiOutlineVideoCamera/>,
           style:"VIDEO",
           time:'2 MIN',
           finished: true,
        },{
           name: "Create savings goal4",
           icon:<HiOutlineDocumentText/>,
           style:"TEXT",
           finished: true,
        },{
           name: "Automate savings4",
           icon:<HiOutlineDocumentText/>,
           style:"TEXT",
           finished: true,
        },{
           name: "Vacation fund4",
           icon:<HiOutlineDocumentText/>,
           style:"TEXT",
           finished: true,
        }
        ],
    },
    {
        name: "Week 5",
        number: 4,
        subSteps:[
            {
            name: "Watch video on personal finance5 ",
            icon:<HiOutlineVideoCamera/>,
            time:'2 MIN',
            style:"VIDEO",
         },{
            name: "Create savings goal5",
            icon:<HiOutlineDocumentText/>,
            style:"TEXT",
         },{
            name: "Automate savings5",
            icon:<HiOutlineDocumentText/>,
            style:"TEXT",
         },{
            name: "Vacation fund5",
            icon:<HiOutlineDocumentText/>,
            style:"TEXT",
         }
         ],
    },
   
  ];
const reducer = (prev={
    progress:4,
    fakeData:ProgramDatabase,
    currSubs:0,
    currWeek:0,
}, action)=>{
    let newData = {...prev};
    switch (action.type){
            case  "finishedCurrStep":
                newData.fakeData[newData.currWeek].subSteps[newData.currSubs].finished =true;
                if(newData[newData.currWeek].number === newData.currSubs){
                        newData.currSubs = 0;
                        newData.currWeek ++;
                }else{
                        newData.currSubs++;
                }
                newData.progress++;
                return newData;  
            
            default : 
                return prev;

        
    }


}
const store = createStore(reducer);
export default store