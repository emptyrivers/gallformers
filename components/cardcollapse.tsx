import { Card, Button, Collapse, Container } from 'react-bootstrap';
import { useState } from 'react';

//TODO This component is kind of janky and was really just a quick hack. We should make it better.
type Props = {
    text: string
}
const CardTextCollapse = ( { text }:Props ) => {
    const [open, setOpen] = useState(false);
    const truncated = text.split(' ').splice(0, 40).join(' ');

    return (
        <Container>
            <Card.Text>{truncated + '...'}</Card.Text>
            <Collapse in={open}>
                <Card.Text>{ text.substring(truncated.length, text.length + 1) }</Card.Text>
            </Collapse>
            <Button 
                onClick={() => setOpen(!open)} 
                aria-controls='' 
                aria-expanded={open}>
                    { open ? 'Show Less...' : 'Show More...' }
                </Button>
        </Container>
    )
};
  
export default CardTextCollapse;