import {render, screen, fireEvent} from '@testing-library/react';
import Counter from './Counter'

// Podemos dividirlos en bloques definidos con la palabra clave describe
//Describe a component or element
describe('<Counter/>', ()=> {
    test('renders the Counter Component', () => {
        //function to ensure is rendering on the screen
        render(<Counter/>)
        // find the element with the text count and increment
        const countElement = screen.getByText(/Count:/i);
        const buttonElement = screen.getByText(/Increment/i)

        //Also we can find by 
        expect(countElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
    })

    test('increments the count when the button is clicked', ()=>{
        render(<Counter/>)
        const buttonElement = screen.getByText(/Increment/i)
        fireEvent.click(buttonElement);
        const countElement = screen.getByText(/Count: 1/i);

        expect(countElement).toBeInTheDocument();
    })
})