import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import ClassroomBody from '../components/Classroom/ClassroomBody';
import ClassroomHeader from '../components/Classroom/ClassroomHeader';

const Classroom:NextPage = () => {
  return (
    // classroom header
    <div>

        <Head>
          <title>Classroom</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div>
            <ClassroomHeader />
            <ClassroomBody />
        </div>
    
    </div>

  );
}

export default Classroom;