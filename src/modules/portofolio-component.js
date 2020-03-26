import React, { Component } from 'react'; 
import { Layout, Row, Col, Modal } from 'antd'; 
import '../assets/css/portofolio.css' 
import Navbar from '../common/layout/navbar-landing' 
import ButtonHome from '../common/component/button/button-home'; 

const { Content } = Layout; // membuat konstanta content 
const whyData = [
    {
        // // image: require(`../../../assets/images/tracking.png`),
        title: 'Read Your Dusty Book',
        description: 'Selama hari-hari kita kemarin, mungkin kita memiliki buku-buku yang ingin kita baca namun tidak sempat karena kesibukan, nah sekaranglah waktunya kita membacanya dan menghilangkan debunya'
    },
    {
        // // image: require(`../../../assets/images/certificate.png`),
        title: 'Yoga, Zumba, or Any Workout',
        description: 'Stay di rumah bukan berarti rebahan terus, jangan sampai kekurangan kegiatan fisik, instruksi secara daring di YouTube dapat menjadi referensi olahraga kita'
    },
    {
        // // image: require(`../../../assets/images/paperless.png`),
        title: 'Cooking! ',
        description: 'Ketika jenuh WFH atau melakukan kegiatan dirumah, memasak cemilan dapat menjadi selingan kegiatan kita dan menambah cemilan di rumah tentunya'
    },
    {
        // // image: require(`../../../assets/images/simplifying.png`),
        title: 'stay connected with your close',
        description: 'Karena waktu kita banyak dihabiskan di rumah dan Berada jauh dari orang-orang terdekat, menjaga agar tetap berkomunikasi dengan mereka merupakan kunci anti jenuh di rumah '
    },
    {
        // image: require(`../../../assets/images/news.png`),
        title: 'Continuing Delayed Hobbies',
        description: 'Saat waktu terasa lama karena bosan, melanjutkan hobi dapat membunuh waktu dan menjaga kita dari kejenuhan menghadapi masa pandemi ini'
    },
    {
        // image: require(`../../../assets/images/both-time.png`),
        title: 'Be Kind and Compassionate to Others.',
        description: 'Ditengah pandemi ini masih banyak saudara kita yang terpaksa bekerja di luar rumah, berbagi dan memberikan sumbangan dapat meringankan beban mereka, kecil untuk kita berarti besar untuk mereka'
    }
]

class PortofolioComponent extends Component{
    render(){
        return(
            <Layout className="landing-container">
                <Content style={{ overflow: "hidden" }}> 
                    <Row className="section-container">
                            <Col lg={24}>
                                <div className="text-soft-blue title-big bold discover-container">
                                Staying Happy and Productive While Social Distancing
                                </div>
                            </Col>
                            <Col lg={24}>
                                <div className="text-black description-discover">
                                  Pause, Reflect, and Stay home, so here we go :
                                </div>
                            </Col>
                            <Col lg={24}>
                                <hr style={{
                                    minHeight: 8,
                                    backgroundColor: '#0f4c75',
                                    border: 'none',
                                    maxWidth: 150,
                                    borderRadius: 26,
                                }}/>
                            </Col>                        
                            <Col lg={24} className="mt-20">
                                <Row
                                    type="flex" justify="center"
                                    className="card-why-container">
                                    {whyData.map( data =>
                                            <Col lg={8} md={12} sm={12} className="">
                                                <div className="card-why-content">
                                                    <img src={data.image}  className="card-why-image"/>
                                                    <div className="text-soft-blue semi-bold mt-10">
                                                        {data.title}
                                                    </div>
                                                    <div className="mt-10" style={{maxWidth:'260px'}}>
                                                        {data.description}
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    }
                                </Row>
                            </Col>
                        </Row>
                </Content>
            </Layout>
        );
    }
}

export default PortofolioComponent;
