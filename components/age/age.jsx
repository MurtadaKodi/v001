import React from 'react';
import './age.css'
import Link from 'next/link';
const Age = () => {
  return (
    <>
    {/* Qatar through the ages Section */}
    <h2 className="ages-title">Qatar through the ages</h2>
    <section id="ages" className="feature container section">
      
      <div className="row">
      {/* PALEOLITHIC AGES */}
      
        <Link href='/paleolithic'>
            <div className="column">
              <div className="card">
                <h3>PALEOLITHIC AGES</h3>
                <h3>العصر الحجري القديم</h3>
              </div>
            </div>
        </Link>

          {/* MESOLITHIC PERIOD */}
          
        <Link href='/mesolithic'>
            <div className="column">
              <div className="card">
                <h3>MESOLITHIC PERIOD</h3>
                <h3>العصر الحجري الوسيط </h3>
              </div>
            </div>
        </Link>
        
      
        {/* NEOLITHIC PERIOD */}
      
        <Link href='/neolithic'>
            <div className="column">
              <div className="card">
                <h3>NEOLITHIC PERIOD</h3>
                <h3>العصر الحجري الحديث</h3>
              </div>
            </div>
        </Link>
        
        {/* BRONZE AND IRON */}
        <Link href="/bronze">
          <div className="column">
            <div className="card">
              <h3>BRONZE AND IRON</h3>
              <h3>البرونزي والحديدي</h3>
            </div>
          </div>
        </Link>

  
      {/* THE UBAID PERIOD */}
        
      <Link href='/ubaid'>
            <div className="column">
              <div className="card">
                <h3>THE UBAID PERIOD</h3>
                <h3>فترة العبيد</h3>
              </div>
            </div>
      </Link>
      
        {/* PRE-ISLAMIC ERA */}
        
    <Link href='/per-islamic'>
            <div className="column">
              <div className="card">
                <h3>PRE-ISLAMIC ERA</h3>
                <h3>عصر ما قبل الإسلام</h3>
              </div>
            </div>
        
    </Link>
      
      </div>
    </section>
    {/* Qatar through the ages Section */}
  </>
  
  );
}

export default Age;
