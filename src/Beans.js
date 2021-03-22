import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const products = [
    {
        id: 1,
        name: 'Brazil Santos Reis',
        description: 'Cinnamon, Melon, Berry, Black Sugar',
        price: 14000
    },
    {
        id: 2,
        name: 'Peru El Barejon',
        description: 'Apple, Green Grape, Peach, Black Sugar',
        price: 14000
    },
    {
        id: 3,
        name: 'Colombia La Loma Las Huertas',
        description: 'Plum, Candy, Dried Fruit, Vanilla',
        price: 14000
    },
    {
        id: 4,
        name: 'Ethiopia Yirgacheffe Banko Gotiti',
        description: 'Floral, Blueberry, Lemongrass, Complexity',
        price: 14000
    }
]

const CardBlock = styled.div `
    position: relative;
    width: 390px;
    border: 1px solid #dedede;
    color: #A5A6AD;
    background-color: #fff;
`;

const Content = styled.div `
    padding: 20px 25px 0 25px;
`;

const Title = styled.div `
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 25px;
    color: #3A3B3D;
`;

const Description = styled.div `
    margin-top: 5px;
    line-height: 25px;
`;

const Price = styled.div`
    margin-top: 10px;
    font-size: 1.25em;
    font-weight: 500;
    color: #3A3B3D;
`;

const Footer = styled.div `
    display: flex;
    align-items: center;
    padding: 20px 25px;
`;

const Button = styled.div `
    box-sizing: border-box;
    margin: 0px 8px 0px 0px;
    min-width: 0px;
    appearance: none;
    display: inline-block;
    text-align: center;
    line-height: inherit;
    text-decoration: none;
    padding: 8px 16px;
    border: 0px;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    background-color: #A5A6AD;
    border-radius: 4px;
    cursor: pointer;
`;

export default () => {
    const dispatch = useDispatch();

    return (
        <div className="beans">
            <h1>Single Origins</h1>
            { products.map(product => 
               <CardBlock key={product.id}>
                <Content>
                    <Title>{product.name}</Title>
                    <Description>{product.description}</Description>
                    <Price>{product.price}</Price>
                </Content>
                <Footer>
                    <Button onClick={
                        () => dispatch({ type: 'buy', payload: product })
                    }>Add!</Button>
                </Footer>
            </CardBlock> 
            )}
        </div>
    )
}

