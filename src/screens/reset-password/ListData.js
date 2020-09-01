

import React from 'react';


var Data = [
  {
    username:"admin",
    email:"admin",
    password:"admin",
  },
  {
    username:"shaheer",
    email:"shaheer",
    password:"shaheer",
  },
  {
    username:"blonk",
    email:"blonk",
    password:"blonk",
  },
]


const ListData = (email , password) => {
  return (
  for(i=0,i<=Data.length(),i++){
    if(Data.email.toLowerCase() == email && Data.password.toLowerCase() == password ){
        props.navigation.navigate('Dashboard');
    }else{
      alert("Incorrect")
    }
  }
  );
};

export default ListData;
