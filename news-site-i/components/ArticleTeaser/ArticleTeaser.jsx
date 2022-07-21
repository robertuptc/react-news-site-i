import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ArticleTeaser({id, title, created_date, handleClick}) {
    
  return (
    <div>
      <Container>
        <Row>
          <Col md="2"><h3>{id}</h3></Col>

          <Col md="4"><h3 onClick={()=> handleClick(id)}>{title}</h3></Col>

          <Col md="6"><p>{created_date}</p></Col>
        </Row>
      </Container>
    </div>
  )
}

export default ArticleTeaser;
