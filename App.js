import { Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, View, ScrollView, ImageBackground, Linking } from 'react-native';
import React, { useState } from 'react';


// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';



export default function App() {
   const [activeScreen, setActiveScreen] = useState('about');

    const navigateToScreen = (screenName) => {
      setActiveScreen(screenName);
    };

  return (
    <ScrollView style={styles.container}>

    {activeScreen === 'name' &&
    <ImageBackground
      source={require('./assets/blobdesign.png')}
    >
     <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 600}}  onPress={() => navigateToScreen('about')}>
        <View style={styles.profilePicContainer}>
         <Image style={styles.profilePic} source={require('./assets/profile.png')} />
        </View>
        <View>
          <Text style={styles.introduction}>Varon M. Gentica</Text>
          <Text style={{textAlign: 'center', color: 'white'}}>BSIT Student</Text>
          <Text style={{textAlign: 'center', color: 'white'}}>Aspriring Web Developer</Text>
        </View>
      </TouchableOpacity>
      </ImageBackground>
    }

    {activeScreen === 'about' && 
    <TouchableOpacity style={{flex: 1,justifyContent: 'center', alignItems: 'center', marginBottom: 35}} 
                        onPress={() => navigateToScreen('education')}>

    <View style={styles.aboutMeTop}>
      <Text style={styles.aboutMe}>About Me</Text>
    </View>

    <View style={{
      flex: 1, 
      padding: 16,
      paddingHorizontal: 40, 
      paddingTop: 80, 
      marginHorizontal: 24,
      backgroundColor: 'white',
      borderTopStartRadius: 150,
      borderTopEndRadius: 150,
      borderBottomStartRadius: 23,
      borderBottomEndRadius: 23,}}>  
      <Text style={styles.aboutMeDesc}>I'm a 22-year-old aspiring web developer fueled by a passion for coding, graphics design and a knack for drawing.
      </Text>
      <Image style={styles.imageAbout} source={require('./assets/imageDesign.png')} />
    </View>

    </TouchableOpacity>
    }

    {activeScreen === 'education' && 
       <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', marginBottom: 35}}  onPress={() => navigateToScreen('project')}>

        <Text style={{
            fontSize: 24, 
            fontWeight: 700, 
            margin: 15,
            paddingBottom: 8,
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            borderBottomWidth: 1,
            borderBottomColor: 'skyblue',}}>
            Education
        </Text>

        <Card style={styles.card}>
          <Text style={styles.gLevel}>Elementary</Text>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
           <Image style={styles.schoolLogo} source={require('./assets/calderonLogo.jpeg')} />
          </View>
          <Text style={{textAlign: 'center'}}>F.G Calderon Intergrated School (Elementary)</Text>
        </Card>

        <Card  style={styles.card}>
          <Text style={styles.gLevel}>Highschool</Text>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
           <Image style={styles.schoolLogo} source={require('./assets/calderonLogo.jpeg')} />
          </View>
          <Text style={{textAlign: 'center'}}>F.G Calderon Intergrated School (Highschool)</Text>
        </Card>

        <Card  style={styles.card}>
          <Text style={styles.gLevel}>Senior Highschool</Text>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
           <Image style={styles.schoolLogo} source={require('./assets/ndgmLogo.png')} />
          </View>
          <Text style={{textAlign: 'center'}}>Notre Dame of Greater Manila</Text>
        </Card>

        <Card  style={styles.card}>
          <Text style={styles.gLevel}>College</Text>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image style={styles.schoolLogo} source={require('./assets/grcLOGO.png')} />
          </View>
          
          <Text style={{textAlign: 'center'}}>Global Reciporcal Colleges (GRC)</Text>
        </Card>

      </TouchableOpacity>
    }

    {activeScreen === 'project' && 
        <View style={{ flex: 1, justifyContent: 'center',}}>
          <Text style={{
            fontSize: 24, 
            fontWeight: 700, 
            margin: 15,
            paddingBottom: 8,
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            borderBottomWidth: 1,
            borderBottomColor: 'skyblue'}}>
            Projects
          </Text>
        
          <TouchableOpacity onPress={() => navigateToScreen('contacts')} >
            <View style={styles.projectContainer}>
              <Text style={styles.projectTitle}>Simple JS Calculator</Text>
              <View>
                <Image style={styles.projectImage} source={require('./assets/project3.png')}/>
              </View>
              <Text style={styles.projectDescription}>This calculator is made with HTML, CSS, and JavaScript, and it includes simple animations.
              </Text>
            </View>

            <View style={styles.projectContainer}>
              <Text style={styles.projectTitle}>Simple CRUD Operation</Text>
              <View>
                <Image style={styles.projectImage} source={require('./assets/project2.png')}/>
              </View>
              <Text style={styles.projectDescription}>This demonstrates the process of CRUD operations, starting from creating or adding items to deleting them.
              </Text>
            </View>

            <View style={styles.projectContainer}>
              <Text style={styles.projectTitle}>Online Mythology Stories and Books</Text>
              <View>
                <Image style={styles.projectImage} source={require('./assets/project1.png')}/>
              </View>
              <Text style={styles.projectDescription}>The purpose of this website is to display various types of famous mythologies from around the world.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      }

      {activeScreen === 'contacts' &&
      <View>
        <TouchableOpacity  style={{flex: 1}} onPress={() => navigateToScreen('name')} >
          <Text style={{
            fontSize: 24, 
            fontWeight: 700, 
            margin: 15,
            paddingBottom: 8,
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            borderBottomWidth: 1,
            borderBottomColor: 'skyblue'}}>
            Contacts
          </Text>

          <View style={styles.logoContainer}>
            <Image style={styles.socialLogo} source={require('./assets/facebookLogo.png')}/>
            <Text style={styles.contacts}>www.facebook.com/varon.gentica.54</Text>
          </View>

          <View style={styles.logoContainer}>
            <Image style={styles.socialLogo} source={require('./assets/linkedinLogo.png')}/>
            <Text style={styles.contacts}>linkedin.com/in/gentica-varon-2810a62aa</Text>
          </View>

          <View style={styles.logoContainer}>
            <Image style={styles.socialLogo} source={require('./assets/gmailLogo.png')}/>
            <Text style={styles.contacts}>varongentica05@gmail.com</Text>
          </View>
        </TouchableOpacity>
      </View>
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 8,
    marginTop: 40,
    backgroundColor: '#0d0830',
  },
  profilePic: {
    width: 200,
    height: 200,
  },
  profilePicContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#b4a9fc',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  introduction: {
    margin: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  aboutMeTop: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  aboutMe: {
    color: 'white',
    fontSize: 40,
    fontWeight: 700,
    flex: 1,
  },
  aboutMeDesc: {
    color: '#0d0830',
  },
  imageAbout: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  gLevel: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  schoolLogo: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: '87%',
    padding: 10,
    paddingBottom: 18,
    margin: 8,
    justifyContent: 'center',
    textAlign: 'center'
  },

  projectContainer: {
    // flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
    marginBottom: 15,
    padding: 5,
    borderRadius: 8,
    elevation: 5, 
  },

  projectTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 13,
  },
  projectImage: {
    width: 300,
    height: 170,
    resizeMode: 'contain',
  },
  projectDescription: {
    textAlign: 'center',
    margin: 8,
  },

  contacts: {
    color: 'white',
    fontFamily: 'monospace',
    fontSize: 14,
    fontWeight: 700,
    textAlign: 'center',
    margin: 11,
  },
  logoContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  socialLogo: {
    width: 40,
    height: 40,
    margin: 4,
    resizeMode: 'contain'
  },

});
