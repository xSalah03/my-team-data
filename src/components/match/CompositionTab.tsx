import { Tabs } from 'antd';
import React from 'react';
import { Container } from './test/Container';
import "./test/css/style.css"

const CompositionTab: React.FC = () => {

    const ColumnName: any = [
        {
            id: 1,
            name: "EQUIPE",
            content: <Container />
        },
        {
            id: 2,
            name: "EQUIPE ADBERSE",
            content: <Container />
        },
    ]

    return (
        <div>
            <span>
                <Tabs
                    defaultActiveKey="1"
                    type="card"
                    size='large'
                    items={ColumnName.map((e: any, i: number) => {
                        return {
                            label: e.name,
                            key: i,
                            children: e.content,
                        };
                    })}
                />
            </span>
        </div>
    );
};

export default CompositionTab;