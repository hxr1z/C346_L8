import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Game from './Game.js';

const Ratings = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Hariz's Game Ratings</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Game title='Life is Strange: Remastered Collection'
                      description='Life is Strange is an episodic, narrative-driven adventure game where players control Max Caulfield, a photography student who discovers she can rewind time. She and her best friend, Chloe Price, use this power to investigate the mysterious disappearance of a fellow student.'
                      rating='10/10'
                      icon_name='butterfly'
                      imageUri='https://image.api.playstation.com/vulcan/ap/rnd/202105/1412/bJYCCmymxvgviuuolfOx8srg.png'
                />
                <Game title='The Legend of Zelda: Tears of the Kingdom'
                      description='The Legend of Zelda: Tears of the Kingdom is an open-world action-adventure game where players control Link to search for Princess Zelda and save the kingdom of Hyrule from the resurrected Ganondorf. It expands on its predecessor with new building mechanics.'
                      rating='9/10'
                      icon_name='sword'
                      imageUri='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSvJieIVJI9oDb__63DaAqH2Viah5RQJQE75mdm-zZhbJ2gChP4RWW4iZbW1-cZlLhyHGswA&s=10'
                />
                <Game title='Lost Records: Bloom and Rage'
                      description='Lost Records: Bloom & Rage is a narrative adventure game from Dont Nod where players experience the story of four teenage friends across two timelines: the summer of 1995 and 2022. Players make choices in both time periods that impact the relationships.'
                      rating='10/10'
                      icon_name='music'
                      imageUri='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShiallJYGHYc0EOzJjxcMnrquclSWHappEQqdaB0u0FSWvlEk4tYvaMFSKhQXduaNGyQ1wPQ&s=10'
                />
                <Game title='Stardew Valley'
                      description='Stardew Valley is a farming simulation RPG where players inherit a dilapidated farm and must work to restore it and their new life in a small town. Players can cultivate crops, raise animals, fish, mine for ore, and craft items.'
                      rating='9/10'
                      icon_name='barn'
                      imageUri='https://i.redd.it/b0iazel3s55e1.jpeg'
                />
                <Game title='Five Nights at Freddys: Secret of the Mimic'
                      description='Five Nights at Freddys: Secret of the Mimic is a survival horror game where the player explores Edwin Murrays abandoned Costume Manor. The player must use stealth, solve puzzles, and evade the Mimic while uncovering secrets.'
                      rating='8/10'
                      icon_name='controller'
                      imageUri='https://image.api.playstation.com/vulcan/ap/rnd/202502/1221/0d00c92c1de9cc36fc5f6b48c5525a77ff036c7a67defdea.png'
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#D3C4BE',
    },
    headerContainer: {
        paddingVertical: 15,
        backgroundColor: '#C4BDAC',
        borderBottomWidth: 1,
        borderColor: 'black',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        color: 'black',
        marginTop: 40,
    },
    scrollContent: {
        paddingBottom: 50,
    }
});

export default Ratings;