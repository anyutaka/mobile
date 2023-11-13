import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { ArrowUp, ArrowUp2, Bill, Bezier,Building, Car, CardEdit,Candle, CardSend, ClipboardClose, Clock, CloseCircle, CloseSquare, CloudPlus, ColorsSquare, DiscountShape, DocumentText, EthereumClassic, Forbidden, Maker, Home, MagicStar,Hierarchy, Note, Note1, NoteAdd, NoteFavorite, PenClose, Repeat, SearchNormal, Send, Send2, Shop, Slash, Star, Star1, StarSlash, User, Wallet, WristClock, Xd, Box1 } from 'iconsax-react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#F0F0F0', '#FFFFFF']} style={styles.gradientBackground}>
      <View style={styles.container}>
        <View style={styles.header}>
        <View style={styles.searchBar}>
          <SearchNormal color={'black'} variant="Linear" size={22} style={{ opacity: 0.5 }} />
            <Text style={{ marginHorizontal: '5%', color: 'black' }}>Cari layanan, makanan, & tujuan</Text>
          </View>
          <User color={'green'} variant="Bold" size={30}  />
        </View>
        <View style={styles.content}>
          <Image
            source={require('./src/Iklan2.jpg')} // Tentukan lokasi gambar di sini
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.Wallet}>
          <Wallet color={'#279EFF'} variant="Bold" size={25} style={{ marginHorizontal: '1%' }}/>
          <Text style={{ marginHorizontal: '2%', fontWeight: 'bold', color: 'black' }}>Rp5.538.090 </Text>
          <ArrowUp color={'#279EFF'} variant="Bold" size={25} style={{ marginHorizontal: '38%' }} />
          <Clock color={'#279EFF'} variant="Bold" size={25} style={{ marginHorizontal: '-35%' }} />
          <DocumentText color={'#279EFF'} variant="Bold" size={25} style={{ marginHorizontal: '38%' }} />
        </View>
        <View style={styles.IconBox}> 
        <Bezier color={'green'} variant="Broken" size={45}  />
        <Text style={styles.iconText}>GoRide</Text>
        </View>
        <View style={styles.IconBox2}> 
        <Car color={'green'} variant="Broken" size={45}  />
        <Text style={styles.iconText}> GoCar</Text>
        </View>
        <View style={styles.IconBox3}> 
        <Candle color={'red'} variant="Broken" size={45}  />
        <Text style={styles.iconText}>GoFood</Text>
        </View>
        <View style={styles.IconBox4}> 
        <Building color={'green'} variant="Broken" size={45}  />
        <Text style={styles.iconText}>GoMart</Text>
        </View>
        <View style={styles.IconBox5}> 
        <Shop color={'red'} variant="Broken" size={45}  />
        <Text style={styles.iconText}>GoShop</Text>
        </View>
        <View style={styles.IconBox6}> 
        <Send color={'green'} variant="Broken" size={45}  />
        <Text style={styles.iconText}>GoSend</Text>
        </View>
        <View style={styles.IconBox7}> 
        <Bill color={'red'} variant="Broken" size={45}  />
        <Text style={styles.iconText}>GoBill</Text>
        </View>
        <View style={styles.IconBox8}> 
        <Box1 color={'green'} variant="Broken" size={45}  />
        <Text style={styles.iconText}>GoBox</Text>
        </View>
        <View style={styles.content}>
        <Text style={{ marginHorizontal: '-35%', paddingVertical: 100, fontWeight: 'bold', fontSize: 22, left: '-21%', color: 'black' }}>Kasih rating dulu, yuk!</Text>
          <View style={styles.contentBox}>
          <Candle color={'red'} variant="Bold" size={24}  />
            <Text style={{marginHorizontal: '9%',bottom:22,fontWeight: 'bold',fontSize: 20,color:"black"}}>GoFood</Text>
            <CloseCircle color={'green'} variant="Bold" size={24} style={{left: '94%',top: '-30%'}}  />
            <Image
            source={require('./src/motor.jpg')} // Tentukan lokasi gambar di sini
            style={styles.imageStyle1}
          />
          <Text style={{marginHorizontal: '27%',bottom:22,fontWeight: 'bold',fontSize: 15,width: 300,top:'-70%',fontWeight: 'bold',color:'black', fontSize: 20,}}>Kasih rating ke driver?</Text>
          <Text style={{ marginHorizontal: '27%', bottom: 22, fontWeight: 'normal', fontSize: 18, width: 300, top: '-70%', color: '#333333', fontSize: 16 }}>Diomino's Pizza - Dinoyo Malang</Text>
          <Text style={{ marginHorizontal: '27%', bottom: 22, fontWeight: 'normal', fontSize: 18, width: 300, top: '-70%', color: '#333333', fontSize: 16 }}>08 Okt 19:27</Text>     
          <Star1 style={styles.star} size={30} variant="TwoTone" color='#9BA4B5' />  
          <Star1 style={styles.star1} size={30} variant="TwoTone" color='#9BA4B5' />
          <Star1 style={styles.star2} size={30} variant="TwoTone" color='#9BA4B5' />
          <Star1 style={styles.star3} size={30}  variant="TwoTone" color='#9BA4B5'/>
          <Star1 style={styles.star4} size={30}  variant="TwoTone" color='#9BA4B5'/>       
          </View>
        </View>
         {/* Footer */}
  
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', // Tambahkan properti position: 'relative'
  },
  header: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 52,
    width: '100%',
    paddingTop: 8,
    paddingBottom: 4,
    borderRadius: 5,
    elevation: 8,
  },
  gradientBackground: {
    flex: 1,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    height: 30,
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  star:{
    marginHorizontal: '27%',
    bottom:95,
    color: 'black',
  },
  star1:{
    marginHorizontal: '27%',
    bottom:125,
    left: 32,
    color: 'black',
  },
  star2:{
    marginHorizontal: '27%',
    bottom:155,
    left: 62,
    color: 'black',
  },
  star3:{
    marginHorizontal: '27%',
    bottom:185,
    left: 92,
    color: 'black',
  },
  star4:{
    marginHorizontal: '27%',
    bottom:215,
    left: 122,
    color: 'black',
  },
  Wallet: {
    position: 'absolute', // Tambahkan properti position: 'absolute'
    backgroundColor: "#e8e8e8",
    flexDirection: 'row', // Menyusun elemen anak dalam satu baris
    alignItems: 'center', // Menyusun elemen anak secara vertikal tengah
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
    margin: 15,
    height: 50, // Mengurangi nilai tinggi untuk membuat bar lebih kecil
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 9,
    width: 385, // Ganti nilai lebar sesuai kebutuhan
    bottom: 510, // Atur elemen "Wallet" berada di bagian bawah
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  imageStyle: {
    width: 410, // Tentukan lebar gambar
    height: 190, // Tentukan tinggi gambar
    resizeMode: 'contain',
  },
  imageStyle1: {
    top: '-19%',
    width:70, // Tentukan lebar gambar
    height:70, // Tentukan tinggi gambar
    resizeMode: 'cover',
  },
  contentBox: {
    position: 'absolute',
    top: 130,
    left: 15,
    paddingHorizontal: 18,
    paddingVertical: 18,
    elevation: 3,
    width: '90%',
    height: '55%',
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
  },
  
  IconBox: {
  position: 'absolute',
  top: 270, // Menyesuaikan nilai top agar sejajar dengan bottom Wallet
  left: 15,
  paddingHorizontal: 18,
  paddingVertical: 18,
  width: 80,
  height: 80,
  borderRadius: 30,
  backgroundColor: "#D0E7D2",
},

IconBox2: {
  position: 'absolute',
  top: 270, // Menyesuaikan nilai top agar sejajar dengan bottom Wallet
  left: 120,
  paddingHorizontal: 18,
  paddingVertical: 18,
  width: 80,
  height: 80,
  borderRadius: 30,
  backgroundColor: "#D0E7D2",
},

IconBox3: {
  position: 'absolute',
  top: 270, // Menyesuaikan nilai top agar sejajar dengan bottom Wallet
  left: 225,
  paddingHorizontal: 18,
  paddingVertical: 18,
  width: 80,
  height: 80,
  borderRadius: 30,
  backgroundColor: "#FCC8D1",
},

IconBox4: {
  position: 'absolute',
  top: 270, // Menyesuaikan nilai top agar sejajar dengan bottom Wallet
  left: 330,
  paddingHorizontal: 18,
  paddingVertical: 18,
  width: 80,
  height: 80,
  borderRadius: 30,
  backgroundColor: "#D0E7D2",
},

IconBox5: {
  position: 'absolute',
  top: 380, // Menyesuaikan nilai top agar sejajar dengan bottom Wallet
  left: 15,
  paddingHorizontal: 18,
  paddingVertical: 18,
  width: 80,
  height: 80,
  borderRadius: 30,
  backgroundColor: "#FCC8D1",
},

IconBox6: {
  position: 'absolute',
  top: 380, // Menyesuaikan nilai top agar sejajar dengan bottom Wallet
  left: 120,
  paddingHorizontal: 18,
  paddingVertical: 18,
  width: 80,
  height: 80,
  borderRadius: 30,
  backgroundColor: "#D0E7D2",
},

IconBox7: {
  position: 'absolute',
  top: 380,
  left: 225,
  paddingHorizontal: 18,
  paddingVertical: 18,
  width: 80,
  height: 80,
  borderRadius: 30,
  backgroundColor: "#FCC8D1",
},

IconBox8: {
  position: 'absolute',
  top: 380,
  left: 330,
  paddingHorizontal: 18,
  paddingVertical: 18,
  width: 80,
  height: 80,
  borderRadius: 30,
  backgroundColor: "#D0E7D2",
},
  iconText: {
    marginTop: 17, // Jarak antara ikon dan teks
    fontSize: 15, // Ukuran teks
    left:'-20%',
    fontWeight: 'bold', // Ketebalan teks
    width: 60,
    textAlign: 'center', // Teks akan diatur ke tengah ikon
    color:"black",
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
  },
  footerItem: {
    flex: 1,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
