import React from 'react';
import logo from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'
import img5 from './images/5.jpg'
import img6 from './images/6.jpg'
import img7 from './images/7.jpg'
import './App.css';

function App() {
  return (
    <div>
      <header>
        <nav>
          <h2>My Work</h2>
          <li><a href='#about'>About</a></li>
          <li><a href='#works'>Works</a></li>
          <li><a href='#news'>News</a></li>
          <li><a href='#contact'>Contact</a></li>
        </nav>
      </header>
      <main>
        <div>
          <img src={logo} />
        </div>
        <div>
          <h1>
            <a id='about'>About</a>
          </h1>
          <p>Xxxxx Ashley</p>
          <li>2th Floor xxxxx Building x-x-x Nishiazabu, Minato-ku, Tokyo 106-0031 Japan</li>
          <li>tel: 000-0000-0000</li>
          <li>url: www.xxxxxx.jp</li>
          <li>mail: xxx@xxxxxx.jp</li>
          <p>プロフィールテキストテキストテキストテキストテキストテキストテキストテキストテキストスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </div>
        <div>
          <h1>
            <a id='works'>Works</a>
          </h1>
          <div>
            <img src={img2} />
            <img src={img3} />
            <img src={img4} />
            <img src={img5} />
            <img src={img6} />
            <img src={img7} />
          </div>
        </div>
        <div>
          <h1>
            <a id='news'>News</a>
          </h1>
          <tr>
            <td>2020.XX.XX</td>
            <td>デザイン雑誌「ＸＸＸＸＸＸ Vol.11』に掲載していただきました。</td>
          </tr>
          <tr>
            <td>2020.XX.XX</td>
            <td>ＸＸ月ＸＸ日から写真集「ＸＸＸＸＸＸＸ」の販売を開始します。</td>
          </tr>          
          <tr>
            <td>2019.XX.XX</td>
            <td>【イベント開催のお知らせ】テキストテキストテキストテキストテキストテキストテキスト</td>
          </tr>  
          <tr>
            <td>2019.XX.XX</td>
            <td>デザイン雑誌「ＸＸＸＸＸＸ Vol.10』に掲載していただきました。</td>
          </tr>  
          <tr>
            <td>2019.XX.XX</td>
            <td>【個展開催のお知らせ】テキストテキストテキストテキストテキストテキストテキスト</td>
          </tr>  
        </div>
        <div>
          <h1>
            <a id='contact'>Contact</a>
          </h1>
          <form>
            <label>NAME</label>
            <input />
            <label>E-mail</label>
            <input />
            <label>MESSAGE</label>
            <input />
            <button>送信</button>
          </form>
        </div>        
      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;
