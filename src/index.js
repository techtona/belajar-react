import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


function getName(mahasiswa){
    return 'Nama : ' + mahasiswa.nama + ' NIM :'+mahasiswa.nim;
}

function selamatDatang(mahasiswa){
    if(mahasiswa.angkatan < 2019){
        return "Selamat datang Maba " + mahasiswa.nama;
    }else{
        return ".....";
    }
}

const mahasiswi = {
    nama : 'Lorem Ipsum',
    nim : '123456',
    angkatan : 2018
}

const element = (<h1>
    Mahasiswa {selamatDatang(mahasiswi)}
</h1>);

// const nama = 'Lorem Ipsum';
// const element = <h1>Nama Saya adalah {nama}</h1>

ReactDOM.render(element, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
