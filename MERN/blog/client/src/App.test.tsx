import {it} from 'vitest';
import '@testing-library/jest-dom'
import {render , screen , fireEvent} from '@testing-library/react';
import App from './App';

it('test for app.jsx' , ()=> {
    render(<App/>)
    const h1Tag = screen.getByRole('heading');
    expect(h1Tag.textContent).toBe('Hello world!')
})