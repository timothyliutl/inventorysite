import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CardComponent from '../Components/CardComponent';


interface categoryTypes {
    name: string,
    description?: string,
    subcategories?: Array<number>,
    url?: string,
    id: number
}
interface CategoryChildren {
    [index: number]: categoryTypes
}

interface propTypes {
    darkmodeOn: boolean
}
var category:CategoryChildren;
const CategorySearch = (props: propTypes) => {
    const type: Array<categoryTypes> = [] //work around for initalizing type but isnt the best thing in the world
    const [categoryList, setCategoryList] = useState(type); //current category list shown
    const [navString, setNavString] = useState('Home'); //string seen on top of the page
    const [listHistory, setListHistory] = useState([type]); //for going backwards
    useEffect(() => {
        //request for whole category array
        fetch('http://uglabs.phy.queensu.ca/inventory/html2php/listCategory.php', {
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

        setNavString(navString + ` > ${category[id].name}`)
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
        }
    })
    const classes = styles();

    

    return (
        <div>
            <Container>
                <Container>
                    <Typography className={props.darkmodeOn ? classes.darkModeText : classes.lightModeText} style={{ marginTop: "30px" }} variant={'h3'}>Quick Links</Typography>
                </Container>
                <Grid spacing={7} container justifyContent={'center'}>
                    <Grid item>
                        <CardComponent id={123} darkmodeOn={props.darkmodeOn} title={'Tutorials'} description={'Various Tutorial Videos'} imageurl={'https://avatars.githubusercontent.com/u/1965106?s=200&v=4'}></CardComponent>
                    </Grid>
                    <Grid item>
                        <CardComponent id={123123} darkmodeOn={props.darkmodeOn} title={'Tutorials'} description={'Various Tutorial Videos'} imageurl={'https://avatars.githubusercontent.com/u/1965106?s=200&v=4'}></CardComponent>
                    </Grid>
                </Grid>
                <hr className={props.darkmodeOn ? classes.hrStyleDark : ""} style={{ marginTop: '70px', marginBottom: '70px', height: '3px' }}></hr>
                <Container>
                    <p>{navString}</p>
                    <Typography className={props.darkmodeOn ? classes.darkModeText : classes.lightModeText} variant={'h3'} style={{ marginTop: "30px" }}>Popular Categories</Typography>
                </Container>
                <Grid spacing={7} container justifyContent={'center'}>
                    <Grid item>
                        <CardComponent id={123} darkmodeOn={props.darkmodeOn} title={'Tutorials'} description={'Various Tutorial Videos'} imageurl={'https://avatars.githubusercontent.com/u/1965106?s=200&v=4'}></CardComponent>
                    </Grid>
                    {categoryList.map((cat: categoryTypes) => (
                        <Grid item>
                            <CardComponent onClick={changePage} darkmodeOn={props.darkmodeOn} description={cat.description} title={cat.name} imageurl={cat.url} id={cat.id}></CardComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}
export default CategorySearch;