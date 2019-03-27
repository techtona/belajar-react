import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            mahasiswa: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let nim = this.refs.nim.value;
        let nama = this.refs.nama.value;
        let gender = this.refs.gender.value;

        this.state.mahasiswa.push({nim, nama, gender});
        this.setState({mahasiswa: this.state.mahasiswa});
        // console.log(this.state.mahasiswa)
        this.refs.form.reset();
        this.refs.nim.focus();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            Tambahkan Mahasiswa
                        </div>
                        <div className="card-body">
                            <form ref="form" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>NIM</label>
                                    <input type="text" ref="nim" className="form-control" placeholder="NIM"/>
                                </div>
                                <div className="form-group">
                                    <label>Nama</label>
                                    <input type="text" ref="nama" className="form-control" placeholder="Nama"/>
                                </div>
                                <div className="form-group">
                                    <label>Gender</label>
                                    <select name="" ref="gender" className="form-control">
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary">Tambah</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            Tabel Mahasiswa
                        </div>
                        <table id="tabel-mahasiswa" className="table-hover table table-bordered">
                            <thead>
                            <tr>
                                <th>NIM</th>
                                <th>NAMA</th>
                                <th>GENDER</th>
                                <th>OPTION</th>
                            </tr>
                            </thead>
                            <tbody>
                                {this.state.mahasiswa.map((data, key) =>{
                                    return (
                                        <tr key={key}>
                                            <td>{data.nama}</td>
                                            <td>{data.nim}</td>
                                            <td>{data.gender}</td>
                                            <td>
                                                <input onClick="" type="button" value="Hapus" className="btn btn-sm btn-danger"/>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
