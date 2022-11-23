import { Col, Row, Tabs } from 'antd';
import React from 'react';
import { Container } from './test/Container';
import "./test/css/style.css"

const CompositionTab: React.FC = () => {

    const ColumnName: any = [
        {
            id: 1,
            name: "WYDAD ATHLETIQUE CLUB",
            logo: "http://apidata.myteam.ma/uploads/afrique/morocco/Morocco31.png",
            content: <Container />
        },
        {
            id: 2,
            name: "RAJA CLUB ATHLETIQUE",
            logo: "http://apidata.myteam.ma/uploads/afrique/morocco/Morocco31.png",
            content: <Container />
        },
    ]

    return (
        <div>
            <span>
                <Row>
                    <Col span={20} offset={2}>

                        <Tabs
                            defaultActiveKey="1"
                            type="card"
                            size='large'
                            items={ColumnName.map((e: any, i: number) => {
                                return {
                                    label:
                                        <span>
                                            <img
                                                style={{
                                                    width: "40px"
                                                }}
                                                src={e.logo} alt="" />
                                            {e.name}
                                        </span>,
                                    key: i,
                                    children: e.content,
                                };
                            })}
                        />
                    </Col>
                </Row>
            </span>
        </div>
    );
};

export default CompositionTab;