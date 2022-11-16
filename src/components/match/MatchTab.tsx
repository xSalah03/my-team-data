import { Tabs } from 'antd';
import React from 'react';
import CompositionTab from './CompositionTab';

const MatchTab: React.FC = () => {

    const ColumnName: any = [
        {
            id: 1,
            name: "COMPOSITION",
            content: <CompositionTab />
        },
        {
            id: 2,
            name: "DETAIL DU MATCH",
        },
        {
            id: 3,
            name: "FEUILLE DU MATCH",
        },
        {
            id: 4,
            name: "STATIQUES",
        },
        {
            id: 5,
            name: "VIDEOS",
        }
    ]

    return (
        <div>
            <Tabs
                defaultActiveKey="1"
                size="large"
                items={ColumnName.map((e: any, i: number) => {
                    return {
                        label: e.name,
                        key: i,
                        children: e.content,
                    }
                })}
            />
        </div>
    );
};

export default MatchTab;