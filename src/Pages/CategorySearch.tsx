import {Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import CardComponent from '../Components/CardComponent';


interface categoryTypes {
    name: string,
    description?: string,
    subcategories?: Array<number>,
    image?: string,
    id: number
}
interface CategoryChildren {
    [index: number]: categoryTypes
}

interface propTypes {
    darkmodeOn: boolean
}

interface navigation{
    name: string,
    id: number
}
var category:CategoryChildren;
const CategorySearch = (props: propTypes) => {
    const type: Array<categoryTypes> = [] //work around for initalizing type but isnt the best thing in the world
    const [categoryList, setCategoryList] = useState(type); //current category list shown
    const [navString, setNavString] = useState([{name: 'Home', id: 583}]); //string seen on top of the page
    const [listHistory, setListHistory] = useState([type]); //for going backwards
    useEffect(() => {
        //request for whole category array
        fetch('http://uglabs.phy.queensu.ca:81/listCategory.php', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((response)=>{
            console.log(response)
            return response.json()
        }).then((json)=>{
            category = json;
            setHomePage(json)
            initializeHistory() //to add home page into history array
            console.log(json)
        }, (error)=>{
            console.log(error)
        })
    }, [])

    const setHomePage = (json:CategoryChildren)=>{
        //have type casting because we dont expect this to be undefined
        const rootChildren:Array<number> = json[583].subcategories as Array<number>;
        console.log(json[583].subcategories)
        const homeArr:Array<categoryTypes> = [];
        rootChildren.map((catid:number)=>{
            homeArr.push(category[catid])
        })
        setCategoryList(homeArr)
        console.log(homeArr)
    }
    //to get first set of categories in listhistory array
    const initializeHistory = () =>{
        var tempArray:Array<categoryTypes> = [];
        category[583].subcategories?.forEach((subcategories)=>{
            tempArray.push(category[subcategories])
        })
        setListHistory([tempArray])
    }
    //function to add home into array
    const addHistory = (id:number) =>{
        var temp = listHistory;
        var tempArray:Array<categoryTypes> = [];
        category[id].subcategories?.forEach((subcategories)=>{
            tempArray.push(category[subcategories])
        })
        temp.push(tempArray)
        setListHistory(temp)
        console.log(temp)
       //TODO:
    }
    //page number index starts at 1
    const goBack = (pageNum:number) =>{
        console.log(pageNum)
        console.log(listHistory)
        setCategoryList(listHistory[pageNum-1])
        setListHistory(listHistory.splice(0,pageNum))
        setNavString(navString.splice(0,pageNum))
    }
    //conditional rendering for "go back" button
    const goBackButton = () =>{
        if(listHistory.length>1){
            return(
                <Button style={{marginTop:'10px', marginLeft:'10px'}} variant={props.darkmodeOn?'outline-info':'info'} className={props.darkmodeOn?classes.darkModeButton:''} onClick={()=>{
                    goBack(listHistory.length-1)
                }}>Go Back</Button>
            )
        }
    }

    const changePage = (e:React.ChangeEvent) => {
        const id:number = parseInt(e.currentTarget.getAttribute('id') as string);
        var tempArray:Array<categoryTypes> = [];
        console.log(id)
        
        if(category[id].subcategories){
            category[id].subcategories?.forEach((subcategories)=>{
                tempArray.push(category[subcategories])
            })
        }
            
        setCategoryList(tempArray);
        console.log(categoryList);
        var tempnavarray = navString;
        tempnavarray.push({name:category[id].name, id: id})
        setNavString(tempnavarray)
        addHistory(id);

    }
    

    const styles = makeStyles({
        lightModeText: {
            color: "black"
        },
        darkModeText: {
            color: "#04d9ff"
        },
        hrStyleDark: {
            color: "#04d9ff"
        },
        whiteShadow: {
            "&:hover": {
                boxShadow: "0px 0px 10px 2px white !important"
            }
        },
        transformGrid: {
            transition: 'height 2s'
        },
        darkModeButton:{
            color: "#04d9ff",
            borderColor: "#04d9ff",
            "&:hover":{
                borderColor: "#04d9ff",
            }
        }
    })
    const classes = styles();

    

    return (
        <div>
            <Container style={{marginTop:'30px', minHeight:'200px'}}>
                <Grid container direction={'row'}>
                   {navString.map((page:navigation, index)=>(
                       <Grid>
                            <p className={props.darkmodeOn?classes.darkModeText:""} onClick={()=>{goBack(index+1)}} style={{cursor:'pointer'}}>{page.name!='Home'?'> ':''} {" " + page.name}</p>
                       </Grid>
                ))} 
                </Grid>
                <hr className={props.darkmodeOn?classes.darkModeText:""} style={{marginTop:'0px', marginBottom:'0px'}}></hr>
                {goBackButton()}
                <Container>
                    <Typography className={props.darkmodeOn ? classes.darkModeText : classes.lightModeText} variant={'h3'} style={{ marginTop: "30px" }}>Categories</Typography>
                </Container>
                <Grid spacing={7} container justifyContent={'center'}>
                    {categoryList.map((cat: categoryTypes) => (
                        <Grid item>
                            <CardComponent onClick={changePage} darkmodeOn={props.darkmodeOn} description={cat.description} title={cat.name} imageurl={cat.image?cat.image:""} id={cat.id}></CardComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}
export default CategorySearch;