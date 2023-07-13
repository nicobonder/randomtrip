import React from 'react'
import logo from '../../assets/logoRandom.png'
import './Information.css';

import { Document, Page, Text, StyleSheet, Image } from '@react-pdf/renderer';

export default function PDFCreator({ km, food, read, total }) {

    const styles = StyleSheet.create({
      body: {
        paddingTop: 24,
        paddingBottom: 65,
        paddingHorizontal: 35,
      },
      page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
      },
      image: {
        width: 100,
        height: 100,
        marginBottom: 24,
      },
      title: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 24,
      },
      text: {
        margin: 12,
        fontSize: 14,
        textAlign: "left",
        fontFamily: "Arial"
      }, 
      header: {
        fontSize: 18, 
        marginBottom: 20,
        textAlign: "center",
        color: "black",
      },
      pageNumber: {
        position: "absolute",
        fontSize: 14,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "black"
      }
    })


    console.log(' km, food, read, total', km, food, read, total);

  return (
    <Document className='informationSection'>
    <Page style={styles.body}>
        <Image style={styles.image} src={logo} />
        <Text style={styles.title}>Estas son las pautas para tu próximo viaje</Text>
        <Text style={styles.header}>Tenés que hacer {km} kilómetros</Text>
        <Text style={styles.header}>Tu opción de comida es {food}</Text>
        <Text style={styles.header}>Tenés que {read}</Text>
        <Text style={styles.header}>Tu presupuesto máximo es ${total}</Text>
        <Text
            style={styles.pageNumber}
            render={({pageNumber, totalPages}) => `${pageNumber} / ${totalPages}`}
            fixed
        />
      </Page>
  </Document>
  )
}
