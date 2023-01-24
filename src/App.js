import './App.css';
import {IntlProvider, FormattedMessage} from 'react-intl'
import { useState,useEffect } from 'react';

  const messages = {
    "az":{
      title:'Salam Dunya',
      description:'{count} yeni mesajiniz var'
    },

    "en-US":{
      title:'Hello World',
      description:'You have {count} new messages'
    }
  }

function App() {
  const isLocale = localStorage.getItem('locale')
  const defaultLocale = isLocale ? isLocale : navigator.language;

   const [locale,setLocale] = useState(defaultLocale)

  useEffect(()=>{
    localStorage.setItem('locale',locale)
  },[locale])


  return (
    <div className="App">

      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id='title'/>
        <br/>
        <FormattedMessage id='description' values={{count:3}}/>
      </IntlProvider>

      <br/><br/>

      <button onClick={()=>setLocale('az')}>Azerbaijan</button>
      <button onClick={()=>setLocale('en-US')}>English</button>
    </div>
  );
}

export default App;
