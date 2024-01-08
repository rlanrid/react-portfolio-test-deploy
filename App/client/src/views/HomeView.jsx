import React, { useEffect, useState } from 'react'
import Header from '../components/layout/Header'
import Main from '../components/layout/Main'
import Footer from '../components/layout/Footer'
import Opening from '../components/section/Opening'
import Intro from '../components/section/Intro'
import Port from '../components/section/Port'
import More from '../components/section/More'
import About from '../components/section/About'
import Stack from '../components/section/Stack'
import Contact from '../components/section/Contact'
import Comment from '../components/section/Comment'

import ArrowImg from '../assets/img/arrow.png'
import { appear } from '../utils/apper'
import { mouse } from '../utils/mouse'

import Progress from '../components/contents/Progress'
import Line from '../components/contents/Line'
import Modal from '../components/section/Modal'
import Loading from '../components/contents/Loading'
import { gsapEffect } from '../utils/gsapEffect'


const HomeView = () => {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 6000)

        if (loading === false) {
            gsapEffect();
        }
    }, [loading]);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className='fade-in' >
                    <Progress />
                    <Header toggleModal={toggleModal} />
                    <Main>
                        <Opening />
                        <Intro appear={appear} />
                        <Port arrowImg={ArrowImg} arrowAlt="화살표이미지" />
                        <More arrowImg={ArrowImg} arrowAlt="화살표이미지" mouse={mouse} />
                        <About arrowImg={ArrowImg} arrowAlt="화살표이미지" />
                        <Stack arrowImg={ArrowImg} arrowAlt="화살표이미지" />
                        <Contact arrowImg={ArrowImg} arrowAlt="화살표이미지" />
                        <Comment arrowImg={ArrowImg} arrowAlt="화살표이미지" toggleModal={toggleModal} />
                    </Main>
                    <Footer />
                    <Modal show={showModal} toggleModal={toggleModal} />
                    <Line />
                </div>
            )}
        </>
    )
}

export default HomeView
