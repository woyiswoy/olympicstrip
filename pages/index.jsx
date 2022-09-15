import {
  faAngleDoubleLeft,
  faAngleDoubleUp,
  faFileLines,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Link from 'next/link'
import { useRef } from 'react'
import EventPic from '../components/event'
import Paragraph from '../components/pg'
import Question from '../components/qs'
import { motion } from 'framer-motion'

export default function Home() {
  const grRef = useRef(null)
  const frRef = useRef(null)
  const feRef = useRef(null)
  const topRef = useRef(null)
  const featureButton = [
    {
      img: '/img/cover/Greece03.jpeg',
      name: 'GREECE (Olpmpia)',
      ref: grRef,
    },
    {
      img: '/img/cover/France02.jpeg',
      name: 'FRANCE (Paris)',
      ref: frRef,
    },
    {
      img: '/img/cover/Olympic03.jpeg',
      name: 'เกร็ดความรู้',
      ref: feRef,
    },
  ]
  return (
    <>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>OLYMPICS Virtual Trip By MWIT30/9</title>
        <meta name='description' content='OLYMPICS Virtual Trip By MWIT30/9' />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property='og:url' content='https://olympicstrip.woyiswoy.com' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='MWIT Open House 2022' />
        <meta
          property='og:description'
          content='OLYMPICS Virtual Trip By MWIT30/9'
        />
        <meta
          property='og:image'
          content='https://olympicstrip.woyiswoy.com/img/ogimage.jpg'
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='openhouse.mwit.ac.th' />
        <meta
          property='twitter:url'
          content='https://olympicstrip.woyiswoy.com'
        />
        <meta name='twitter:title' content='MWIT Open House 2022' />
        <meta
          name='twitter:description'
          content='OLYMPICS Virtual Trip By MWIT30/9'
        />
        <meta
          name='twitter:image'
          content='https://olympicstrip.woyiswoy.com/img/ogimage.jpg'
        />
      </Head>

      <div
        className='fixed bottom-0 right-0 left-0 sm:left-auto sm:top-[90vh] z-20'
        // style={{ transformOrigin: '100% 0' }}
      >
        <div className='flex flex-wrap sm:rotate-90 sm:origin-top-right font-IBMPlexLoop font-semibold'>
          <button
            className='flex-1 flex items-center justify-center py-2 px-4 gap-2 text-sm sm:text-base lg:text-lg bg-tdk text-white'
            onClick={() =>
              topRef.current?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <FontAwesomeIcon icon={faAngleDoubleUp} className='sm:-rotate-90' />
            <span className='whitespace-nowrap'>TOP</span>
          </button>
          <button
            className='flex-1 flex items-center justify-center py-2 px-4 gap-2 text-sm sm:text-base lg:text-lg bg-black text-white'
            onClick={() =>
              grRef.current?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            {/* <FontAwesomeIcon icon={faFileLines} /> */}
            <span className='whitespace-nowrap'>GREECE</span>
          </button>
          <button
            className='flex-1 flex items-center justify-center py-2 px-4 gap-2 text-sm sm:text-base lg:text-lg bg-white'
            onClick={() =>
              frRef.current?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            {/* <FontAwesomeIcon icon={faFileLines} /> */}
            <span className='whitespace-nowrap'>FRANCE</span>
          </button>
          <button
            className='flex-1 flex items-center justify-center py-2 px-4 gap-2 text-sm sm:text-base lg:text-lg bg-vbg'
            onClick={() =>
              feRef.current?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            {/* <FontAwesomeIcon icon={faFileLines} /> */}
            <span className='whitespace-nowrap'>เกร็ดความรู้</span>
          </button>

          <Link
            href={
              'https://docs.google.com/forms/d/e/1FAIpQLSf1KNbPIHQD-b1ZKNc5yXdHOBO7jz5OtY-idpLbJj0dxKzByg/viewform?usp=sf_link'
            }
          >
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='flex-1 flex items-center justify-center py-2 px-4 gap-2 text-sm sm:text-base lg:text-lg bg-tdk text-white'
            >
              <FontAwesomeIcon icon={faFileLines} />
              <span className='whitespace-nowrap'>แบบประเมิน</span>
            </a>
          </Link>
        </div>
      </div>
      <div className='w-full min-h-screen flex flex-col'>
        <div className='bg-vbg w-full relative z-30' ref={topRef}>
          <div className='absolute w-full right-0 bottom-0 left-0 h-1/2 bg-gradient-to-b from-transparent to-black' />
          <div className='w-full max-w-7xl flex flex-col justify-center items-center mx-auto pt-16'>
            <motion.span
              className='font-Signika font-bold text-6xl md:text-8xl lg:text-9xl text-tdk'
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                bounce: 0.4,
                type: 'spring',
              }}
            >
              OLYMPICS
            </motion.span>
            <motion.span
              className='font-Signika text-xl md:text-2xl lg:text-3xl text-tdk'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.8,
                type: 'spring',
              }}
            >
              VIRTUAL TRIP BY MWIT30/9
            </motion.span>
            <div className='flex flex-wrap justify-center gap-4 pt-6 px-10'>
              {featureButton.map((fb, fbi) => (
                <motion.button
                  key={fbi}
                  className='rounded-xl overflow-hidden relative group'
                  onClick={() =>
                    fb.ref.current?.scrollIntoView({ behavior: 'smooth' })
                  }
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 1.2 + fbi * 0.4,
                    type: 'spring',
                  }}
                >
                  <img src={fb.img} className='w-full max-w-xs' />
                  <span className='absolute group-hover:scale-110 transition-transform duration-300 bottom-0 left-0 right-0 text-white font-IBMPlex font-semibold text-2xl pb-2 bg-gradient-to-t from-black to-transparent'>
                    {fb.name}
                  </span>
                </motion.button>
              ))}
            </div>
            <motion.img
              src='/img/olmbg.jpg'
              className='w-full max-w-2xl pt-16'
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 2.3,
                type: 'spring',
              }}
            />
          </div>
        </div>

        <div className='w-full bg-black relative inset-0 min-h-[350vh]'>
          <div className='w-full absolute right-0 left-0 top-0 h-[10vh] bg-gradient-to-t from-transparent to-black !z-30' />
          <div className='absolute inset-0 z-10 flex flex-col'>
            <div className='w-full h-[10vh] bg-gradient-to-t from-transparent to-black' />
            <div className='w-full bg-black min-h-[80vh]'>
              <div className='max-w-6xl mx-auto flex flex-col justify-center px-10 py-20 gap-4'>
                <span className='font-IBMPlex font-semibold text-4xl md:text-5xl lg:text-6xl text-orange-400'>
                  โอลิมปิก คืออะไร?
                </span>
                <Paragraph
                  className={'text-base md:text-lg lg:text-xl text-white'}
                >
                  <b>การแข่งขันกีฬาโอลิมปิก (Olympic Games)</b> หรือ โอลิมปิกส์
                  (Olympics) เป็นการแข่งขันกีฬาหลายชนิด
                  จากหลายประเทศทั่วโลกร่วมแข่งขัน โดยจัดขึ้นทุก 4 ปี
                  และมีการแบ่งออกเป็น <b>โอลิมปิกฤดูร้อน และ โอลิมปิกฤดูหนาว</b>
                </Paragraph>
                <span className='font-IBMPlex font-semibold pt-8 text-4xl md:text-5xl lg:text-6xl text-orange-400'>
                  ห่วงสีทั้ง 5 คืออะไร?
                </span>
                <Paragraph
                  className={'text-base md:text-lg lg:text-xl text-white'}
                >
                  {
                    'สัญลักษณ์โอลิมปิก (Olympic Symbols) เป็นรูปวงกลม 5 ห่วงคล้องกันอยู่ 2 ชั้น ชั้นบนมีอยู่ 3 ห่วง ชั้นล่าง 2 ห่วง ประกอบด้วย สีน้ำเงิน สีเหลือง สีดำ สีเขียวและสีแดง ตั้งอยู่บนพื้นขาว ผู้ออกแบบสัญลักษณ์นี้ก็คือ คูเบอร์-แตง "บิดาแห่งกีฬาโอลิมปิก"'
                  }
                </Paragraph>
                <Paragraph
                  className={'text-base md:text-lg lg:text-xl text-white'}
                >
                  ห่วงทั้ง 5 หมายถึง 5 ทวีปที่มาร่วมการแข่งขัน ส่วนสีทั้ง 5
                  หมายถึงสี ของ ธงชาติที่อย่างน้อยที่สุด
                  ธงชาติแต่ละประเทศก็ต้องมีสีใดสีหนึ่งใน 5 สีเหล่านี้
                </Paragraph>
                <div className='px-10 flex justify-center py-10'>
                  <img src='/img/olmlogo.png' className='w-full max-w-xs' />
                </div>
              </div>
            </div>
            <div
              className='w-full bg-gradient-to-b from-black to-transparent min-h-[30vh]'
              ref={grRef}
            />
            <div className='w-full bg-transparent min-h-[40vh]' />
            <div className='w-full bg-gradient-to-t from-black to-transparent min-h-[30vh]' />
            <div className='w-full bg-black min-h-[80vh] grow px-10 py-20 flex flex-wrap justify-center items-center gap-6'>
              <EventPic
                src='/img/grevent/1896-6.jpeg'
                alt='การแข่งขันกีฬาโอลิมปิกในปี 1896'
                className='text-white'
              />
              <EventPic
                src='/img/grevent/2004-5.jpeg'
                alt='การแข่งขันกีฬาโอลิมปิกในปี 2004'
                className='text-white'
              />
            </div>
          </div>
          <div className='flex flex-col justify-center sticky top-0 min-h-screen w-full max-w-7xl px-10 mx-auto'>
            <span className='font-Signika font-bold text-transparent text-6xl md:text-9xl lg:text-[10rem] bg-clip-text bg-gradient-to-r from-yellow-200 to-white'>
              GREECE
            </span>
            <Paragraph
              className={'pt-8 text-base md:text-xl lg:text-2xl text-white'}
            >
              นอกจากประเทศกรีซจะเป็นจุดกำเนิดของอารยธรรมกรีกโบราณเเล้วนั้น
              ประเทศกรีซ ณ หุบเขาโอลิมเปีย ยังเป็นจุดเริ่มต้นของ ‘โอลิมปิก’ ด้วย
              มากไปกว่านั้นที่นี่ยังมีนครรัฐที่ยิ่งใหญ่ที่สุดอย่างเอเธนส์ซึ่งเต็มไปด้วย
              ประติมากรรม
              เเละสถาปัตยกรรมมากมายที่สะท้อนให้เห็นถึงความก้าวหน้าทางด้านต่าง ๆ
              ของมนุษย์ในยุคนั้น
            </Paragraph>
          </div>
        </div>

        <div className='w-full min-h-[200vh] relative'>
          <div className='absolute w-full inset-0 bg-[url("/img/greece/04.jpeg")] bg-cover bg-no-repeat bg-center'></div>
          <div className='absolute flex flex-col w-full h-full inset-0'>
            <div className='w-full bg-black min-h-[50vh]' />
            <div className='w-full bg-gradient-to-t from-transparent to-black min-h-[50vh]' />
            <div className='w-full grow' />
            <div className='w-full bg-gradient-to-b from-transparent to-white min-h-[50vh]' />
          </div>
          <div className='sticky top-0 h-screen flex flex-col gap-8 px-6 py-20 justify-center items-center'>
            <span className='font-Signika font-bold text-2xl md:text-4xl lg:text-5xl text-white rounded-full px-10 py-2 bg-black/50'>
              GREECE Virtual Trip
            </span>
            <iframe
              type='text/html'
              className='w-full max-w-4xl aspect-video rounded-xl'
              src='https://www.youtube.com/embed/IUs_ETT0Fac?modestbranding=1&color=white&iv_load_policy=3'
              frameBorder='0'
              allowFullScreen
            />
          </div>
        </div>

        {/* <div className='w-full bg-white'>
        <div className='flex flex-col min-h-screen justify-center px-10 max-w-7xl mx-auto'>
          <Question
            q={'วิหารพาเธนอนมีเสาหินแบบใด'}
            ch={['ดอริก', 'ไอออนิก', 'คอรินเทียน']}
            ans={0}
          />
        </div>
      </div> */}

        <div className='w-full bg-white relative inset-0 min-h-[350vh]'>
          <div className='absolute inset-0 z-10 flex flex-col'>
            <div className='w-full bg-white min-h-[80vh]'>
              <div className='max-w-6xl flex flex-col justify-center px-6 py-20 gap-6 mx-auto'>
                <Question
                  q={'วิหารพาเธนอนมีเสาหินแบบใด'}
                  ch={['ดอริก', 'ไอออนิก', 'คอรินเทียน']}
                  ans={1}
                  className='bg-gray-100 rounded-xl py-4 px-6'
                />
                <Question
                  q={'ในยุคเริ่มต้นโอลิมปิกผู้ชนะได้สิ่งใดเป็นรางวัล'}
                  ch={['มงกุฎมะกอก', 'มงกุฎลาเวนเดอร์', 'มงกุฎยูคาลิปตัส']}
                  ans={1}
                  className='bg-gray-100 rounded-xl py-4 px-6'
                />
                <Question
                  q={'ข้อใดกล่าวถูกต้องเกี่ยวกับการแข่งขันช่วงแรกของโอลิมปิก'}
                  ch={[
                    'ผู้หญิงเข้าชมและแข่งได',
                    'ผู้หญิงเข้าชมได้แข่งไม่ได้',
                    'ผู้หญิงเข้าชมและแข่งไม่ได้',
                  ]}
                  ans={2}
                  className='bg-gray-100 rounded-xl py-4 px-6'
                />
              </div>
            </div>
            <div
              className='w-full bg-gradient-to-b from-white to-transparent min-h-[30vh]'
              ref={frRef}
            />
            <div className='w-full bg-transparent min-h-[40vh]' />
            <div className='w-full bg-gradient-to-t from-white to-transparent min-h-[30vh]' />
            <div className='w-full bg-white min-h-[80vh] grow px-10 py-20 flex flex-wrap justify-center gap-6'>
              {/* <EventPic
                src='/img/frevent/1900-1.jpeg'
                alt='การแข่งขันกีฬาโอลิมปิกในปี 1900'
                className='text-black'
              /> */}
              <EventPic
                src='/img/frevent/1924-1.jpeg'
                alt='การแข่งขันกีฬาโอลิมปิกในปี 1924'
                className='text-black'
              />
              <EventPic
                src='/img/frevent/2024-3.jpeg'
                alt='การแข่งขันกีฬาโอลิมปิกที่กำลังจะจัดขึ้นในปี 2024'
                className='text-black'
              />
            </div>
          </div>
          <div className='flex flex-col justify-center sticky top-0 min-h-screen w-full max-w-7xl px-10 mx-auto'>
            <span className='font-Signika font-bold text-transparent text-6xl md:text-9xl lg:text-[10rem] bg-clip-text bg-gradient-to-r from-rose-500 to-violet-700'>
              FRANCE
            </span>
            <Paragraph className={'pt-8 text-base md:text-xl lg:text-2xl'}>
              ปารีส ประเทศฝรั่งเศสเป็นหนึ่งเมืองในฝันของใครหลาย ๆ คน
              ใครจะไปคิดว่ากรุงปารีสแห่งวัฒนธรรมและแฟชั่นอันยิ่งใหญ่แห่งยุโรปเเห่งนี้เคยเป็นเจ้าภาพจัดการแข่งขันโอลิมปิกฤดูหนาวหลังจากจัดครั้งเเรกที่เอเธนส์เพียง
              4 ปีเท่านั้น ฝรั่งเศสประเทศที่รวมเอา งานศิลปะ มรดกทางวัฒนธรรม
              เเละเหตุการณ์ทางประวัติศาสตร์ของทุกยุคทุกสมัยไว้ในที่เดียว
            </Paragraph>
          </div>
        </div>

        <div className='w-full min-h-[200vh] relative'>
          <div className='absolute w-full inset-0 bg-[url("/img/france/01.jpeg")] bg-cover bg-no-repeat bg-center'></div>
          <div className='absolute flex flex-col w-full h-full inset-0'>
            <div className='w-full bg-white min-h-[50vh]' />
            <div className='w-full bg-gradient-to-t from-transparent to-white min-h-[50vh]' />
            <div className='w-full grow' />
            <div className='w-full bg-gradient-to-b from-transparent to-vbg min-h-[50vh]' />
          </div>
          <div className='sticky top-0 h-screen flex flex-col gap-8 px-8 py-20 justify-center items-center'>
            <span className='font-Signika font-bold text-2xl md:text-4xl lg:text-5xl text-black rounded-full px-10 py-2 bg-white/50'>
              FRANCE Virtual Trip
            </span>
            <iframe
              type='text/html'
              className='w-full max-w-4xl aspect-video rounded-xl'
              src='https://www.youtube.com/embed/f8DrVW8pTVQ?modestbranding=1&color=white&iv_load_policy=3'
              frameBorder='0'
              allowFullScreen
            />
          </div>
        </div>

        <div className='w-full bg-vbg relative inset-0 min-h-[340vh]'>
          <div className='absolute inset-0 z-10 flex flex-col'>
            <div className='w-full bg-vbg min-h-[80vh]'>
              <div className='max-w-6xl flex flex-col justify-center px-10 py-20 gap-6 mx-auto'>
                <Question
                  q={'ในปี 2024 กีฬาอะไรที่ถูกเพิ่มขึ้นมาใหม่'}
                  ch={['มวยไทย', 'โปโล', 'ฟุตบอล']}
                  ans={3}
                  className='bg-amber-100 rounded-xl py-4 px-6'
                  hover='hover:bg-amber-200'
                />
                <Question
                  q={'MONA LISA เป็นภาพของใคร'}
                  ch={['นางแบบ', 'ลีโอนาโดแต่งหญิง', 'สรุปไม่ได้']}
                  ans={3}
                  className='bg-amber-100 rounded-xl py-4 px-6'
                  hover='hover:bg-amber-200'
                />
                <Question
                  q={'ลักษณะของศิลปะ gothic'}
                  ch={['มืดๆทึมๆ', 'สว่างสดใส', 'Minimal']}
                  ans={1}
                  className='bg-amber-100 rounded-xl py-4 px-6'
                  hover='hover:bg-amber-200'
                />
              </div>
            </div>
            <div
              className='w-full bg-gradient-to-b from-vbg to-transparent min-h-[30vh]'
              ref={feRef}
            />
            <div className='w-full bg-transparent min-h-[40vh]' />
            <div className='w-full bg-gradient-to-t from-vbg to-transparent min-h-[30vh]' />
            <div className='w-full bg-vbg min-h-[80vh] grow px-10 py-20 flex flex-wrap justify-center items-center gap-6'>
              <EventPic
                src='/img/feevent/1920.jpeg'
                alt='การแข่งขันกีฬาโอลิมปิกในปี 1920 เบลเยียม'
                className='text-black'
              />
              <EventPic
                src='/img/feevent/1980.webp'
                alt='การแข่งขันกีฬาโอลิมปิกในปี 1980 มอสโก สหภาพโซเวียต'
                className='text-black'
              />
            </div>
          </div>
          <div className='flex flex-col justify-center sticky top-0 min-h-screen w-full max-w-7xl px-10 mx-auto'>
            <span className='font-IBMPlex font-bold text-tdk text-3xl md:text-5xl lg:text-6xl'>
              เกร็ดความรู้ Olympic
            </span>
            <Paragraph className={'pt-8 text-base md:text-xl lg:text-2xl'}>
              ไม่ว่าใครก็อยากประสบความสำเร็จในชีวิตกันทั้งนั้น
              เเต่บางอย่างก็ผิดพลาดกันได้ โอลิมปิกก็เช่นกัน
              ในประวัติศาสตร์ที่ผ่านมาก็มีหลายครั้งที่การแข่งขันโอลิมปิกถูกยกเลิกไป
              เกิดอะไรขึ้นกันเเน่?
            </Paragraph>
          </div>
        </div>

        <div className='w-full min-h-[200vh] relative'>
          <div className='absolute w-full inset-0 bg-[url("/img/feevent/1988.jpg")] bg-cover bg-no-repeat bg-center'></div>
          <div className='absolute flex flex-col w-full h-full inset-0'>
            <div className='w-full bg-vbg min-h-[50vh]' />
            <div className='w-full bg-gradient-to-t from-transparent to-vbg min-h-[50vh]' />
            <div className='w-full grow' />
            <div className='w-full bg-gradient-to-b from-transparent to-black min-h-[50vh]' />
          </div>
          <div className='sticky top-0 h-screen flex flex-col gap-8 px-8 py-20 justify-center items-center'>
            <span className='font-IBMPlex font-bold text-2xl md:text-4xl lg:text-5xl text-black rounded-full px-10 py-2 bg-vbg/50'>
              เกร็ดความรู้ Olympic
            </span>
            <iframe
              type='text/html'
              className='w-full max-w-4xl aspect-video rounded-xl'
              src='https://www.youtube.com/embed/P4O2MxKy_3A?modestbranding=1&color=white&iv_load_policy=3'
              frameBorder='0'
              allowFullScreen
            />
          </div>
        </div>

        <div className='bg-black w-full min-h-screen flex justify-center items-center px-6'>
          <iframe
            loading='lazy'
            type='text/html'
            className='w-full max-w-4xl aspect-video rounded-xl'
            src='https://www.canva.com/design/DAFLLJDQ6eo/view?embed'
            frameBorder='0'
            allowFullScreen
          />
          {/* <div
          style={{
            'box-shadow': '0 2px 8px 0 rgba(63,69,81,0.16)',
            'border-radius': '8px',
            'will-change': 'transform',
          }}
          className='relative w-full h-0 pt-[56.25%] pb-48 mt-[1.6em] mb-[0.9em] mx-auto overflow-hidden'
        >
          <iframe
            loading='lazy'
            // style='position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;'
            className='absolute w-full h-full top-0 left-0 border-none p-0 m-0'
            src='https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFLLJDQ6eo&#x2F;view?embed'
            allowfullscreen='allowfullscreen'
            allow='fullscreen'
          ></iframe>
        </div>
        <a
          href='https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFLLJDQ6eo&#x2F;view?utm_content=DAFLLJDQ6eo&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link'
          target='_blank'
          rel='noopener'
        >
          Virtual Trip30&#x2F;9
        </a>{' '}
        by Lepus :p */}
        </div>
      </div>
      <div className='bg-black w-full flex justify-center items-center px-6 pb-20 sm:pb-8'>
        <span className='font-IBMPlexLoop text-white text-xs md:text-sm lg:text-base text-center'>
          จัดทำโดยนักเรียนชั้นมัธยมศึกษาปีที่ 6/9 ปีการศึกษา 2565
          โรงเรียนมหิดลวิทยานุสรณ์
        </span>
      </div>
    </>
  )
}
