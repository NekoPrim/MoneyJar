import React from 'react';
import useReduxStore from '../../../hooks/useReduxStore';
import Header from '../../Reusable/Header';

export default function CategoriesScreen() {
    const store = useReduxStore();
    console.log('store', store);
    return (
        <>
        <Header />
        <h1>
            Categories Screen
        </h1>
        </>
    );
}