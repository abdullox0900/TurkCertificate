import React,{useState, useRef} from 'react';
import './App.scss';

function App() {

  const [inValue, setInValue] = useState('');
  const elBox = useRef()
  const elInput = useRef()

  

  return (
    <>
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
          <input ref={elInput} type="text"  placeholder='Kayıt bulunamadı..' onChange={(evt) => setInValue(evt.target.value)}/>
          <button type='button' onClick={() => {
            if(inValue == '2210400152') {
              elBox.current.classList.add('active');
            } else {
              setInValue('')
              elInput.current.value = ''
              // elInput.style.placeholder = "Kayit bulunamadi..";
              elBox.current.classList.remove('active');
            }
          }}>GETİR</button>

          <div className="sonuc" ref={elBox}>
            <table>
              <tbody>
                <tr>
                  <td>TC NO</td>
                  <td>FA1380771</td>
                </tr>
                <tr>
                  <td>ADI SOYADI</td>
                  <td>ABDULLOX ABDUSALOMOV</td>
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
                  <td>19,5</td>
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
                  <td>71,5</td>
                </tr>
                <tr>
                  <td>SONUÇ</td>
                  <td>C1</td>
                </tr>
                <tr>
                  <td>SINAV TARİHİ</td>
                  <td>3 Ekim 2022</td>
                </tr>
                <tr>
                  <td>BELGE TARİHİ</td>
                  <td>4 Ekim 2022</td>
                </tr>
                <tr>
                  <td>SERTİFİKA NO</td>
                  <td>2210400152</td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </section>
    </>
  );
}

export default App;
