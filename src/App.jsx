import React, { useState, useRef } from 'react';
import './App.scss';

function App() {

  const [inValue, setInValue] = useState(null);
  const elBox = useRef()
  const elInput = useRef()



  return (
    <>
      <div className='container'>
        <section className='certificate'>
          <div className='certificate__top'>
          </div>
          <div className='certificate__body'>
            <p>
              Türkçe Öğretimi Uygulama ve Araştırma Merkezi (TÖMER)
              Sürekli Eğitim Merkezi (SEM)
            </p>
            <h4>SERTİFİKA SORGULAMA</h4>
          </div>

          <form>
            {/* Sertifika No */}
            <input ref={elInput} type="text" placeholder='Kayıt bulunamadı..' onChange={(evt) => setInValue(evt.target.value)} />
            <button type='button' onClick={() => {
              if (inValue == '2210400110') {
                elBox.current.classList.add('active');
              } else if (!inValue == '2210400110') {
                elBox.current.classList.remove('active');
              } else {
                setInValue('')
                elInput.current.value = ''
                elBox.current.classList.remove('active');
              }
            }}>GETİR</button>

            <div className="sonuc" ref={elBox}>
              <table>
                <tbody>
                  <tr>
                    <td>TC NO</td>
                    <td>FA 0070309</td>
                  </tr>
                  <tr>
                    <td>ADI SOYADI</td>
                    <td>Olimjon Khaidarov</td>
                  </tr>
                  <tr>
                    <td>ÜLKESİ</td>
                    <td>ÖZBEKİSTAN</td>
                  </tr>
                  <tr>
                    <td>DİNLEME</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>OKUMA</td>
                    <td>19.5</td>
                  </tr>
                  <tr>
                    <td>YAZMA</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>KONUŞMA</td>
                    <td>14</td>
                  </tr>
                  <tr>
                    <td>TOPLAM</td>
                    <td>71.5</td>
                  </tr>
                  <tr>
                    <td>SONUÇ</td>
                    <td>C1</td>
                  </tr>
                  <tr>
                    <td>SINAV TARİHİ</td>
                    <td>17 Ekim 2022</td>
                  </tr>
                  <tr>
                    <td>BELGE TARİHİ</td>
                    <td>17 Ekim 2022</td>
                  </tr>
                  <tr>
                    <td>SERTİFİKA NO</td>
                    <td>2210400110</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default App;
