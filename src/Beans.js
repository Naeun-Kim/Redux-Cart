import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const products = [
    {
        id: 1,
        name: 'Brazil Santos Reis',
        description: 'Cinnamon, Melon, Berry, Black Sugar',
        price: 14000,
        image: 'brazil'
    },
    {
        id: 2,
        name: 'Peru El Barejon',
        description: 'Apple, Green Grape, Peach, Black Sugar',
        price: 14000,
        image: 'peru'
    },
    {
        id: 3,
        name: 'Colombia La Loma Las Huertas',
        description: 'Plum, Candy, Dried Fruit, Vanilla',
        price: 14000,
        image: 'colombia'
    },
    {
        id: 4,
        name: 'Ethiopia Yirgacheffe Banko Gotiti',
        description: 'Floral, Blueberry, Lemongrass, Complexity',
        price: 14000,
        image: 'ethiopia'
    }
]

const CardBlock = styled.div `
    position: relative;
    width: 390px;
    //border: 1px solid #dedede;
    color: #A5A6AD;
    background-color: #fff;
`;

const Media = styled.div `
    min-height: 500px;
    background: rgba(255,255,255,.3) url('${props => props.media}') no-repeat;
    background-size: cover;
`;

const Content = styled.div `
    padding: 20px 25px 0 25px;
`;

const Title = styled.div `
    display: flex;
    align-items: center;
    margin-top: 10px;
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
    padding: 10px 25px;
    border: 0px;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    background-color: #3A3B3D;
    //border-radius: 4px;
    cursor: pointer;
`;

export default () => {
    const dispatch = useDispatch();

    return (
        <>
        <h1>Single Origins</h1>
        <div className="beans">
            { products.map(product => 
               <CardBlock key={product.id}>
                <Content>
                    <Media media={process.env.PUBLIC_URL + `/assets/${product.image}.png`} />
                    <Title>{product.name}</Title>
                    <Description>{product.description}</Description>
                    <Price>{product.price}</Price>
                </Content>
                <Footer>
                    <Button onClick={
                        () => dispatch({ type: 'buy', payload: product })
                    }>Add</Button>
                </Footer>
            </CardBlock> 
            )}
        </div>
        </>
    )
}

