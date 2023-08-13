import React, { useContext, useEffect, useState } from 'react'
import styles from "./HomePage.module.css"
import { homeContext } from '../../Context/homeContext'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


export default function HomePage() {



  return <>
           <Helmet>
        <title>Home</title>
        </Helmet>

    <div className="main p-3 text-center">
      <div>
        <div className='d-flex justify-content-between align-items-center'>



        <h1  className='  mx-auto text-center'> جامعة بنها</h1>

        




        </div>
      
        
        <p className='mt-3 px-5  des '>
        

      يرجع أساس الكلية إلى الشعبة الهندسية بالمعهد العالى الفنى بالقاهرة والذى تأسس فى أكتوبر عام 1961 وكان تابعاً لوزارة التعليم العالى ويضم ثلاث شعب هى الشعبة الهندسية والشعبة الزراعية والشعبة التجارية وتمنح الشعبة الهندسية درجة البكالوريوس فى الهندسة بعد دراسة خمس سنوات باللغة الإنجليزية - فى أكتوبر عام 1975 تم دمج الشعبة الهندسية للمعهد العالى الفنى فى كلية التكنولوجيا بالمطرية - جامعة حلوان - فى أبريل عام 1976
      صدر القرار الجمهورى رقم 367 لسنة 1976 بضم المعهد العالى الفنى بشبرا إلى جامعة عين شمس تحت اسم كلية الهندسة بشبرا - فى 30/10/1976 ثم صدر القرار الجمهورى رقم 1069 لسنة 1976 بضم كلية الهندسة بشبرا إلى جامعة الزقازيق/ فرع بنها - وأخيراُ صدر القرار الجمهورى رقم ( 84) لسنة 2005 بإنشاء جامعة بنها وكلية الهندسة بشبرا إحدى كلياتها
        </p>
      </div>

    </div>
  </>
}
