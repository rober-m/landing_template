import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { Fade } from 'react-awesome-reveal';
import {
  ItemExtra,
  ItemName,
  ItemQuote,
  ItemWrapper,
  Person,
  StarsContainer,
  TestimonialsSection,
} from './styles';
import { ImageComponent } from '../../common/ImageComponent';

interface TestimonialsProps {
  content: string;
  id: string;
}

interface ITestimonials {
  name: string;
  extra: string;
  image: string;
  quote: string;
}

const Testimonials = ({ content, id }: TestimonialsProps) => {
  const { t } = useTranslation(content);
  const testimonials: ITestimonials[] = t('testimonials', {
    returnObjects: true,
  });

  return (
    <TestimonialsSection id={id}>
      <Fade direction='up' triggerOnce>
        <h6>{t('title')}</h6>
        <Row justify='space-between' align='top'>
          {typeof testimonials === 'object' &&
            testimonials.map(({ name, extra, image, quote }, index) => {
              return (
                <Col key={index} lg={6} md={12} sm={12} xs={24}>
                  <ItemWrapper>
                    <StarsContainer>
                      {[...Array(5)].map((_, index) => {
                        return (
                          <ImageComponent
                            rounded
                            src='star.svg'
                            height={'25px'}
                            width={'25px'}
                            key={index}
                          />
                        );
                      })}
                    </StarsContainer>
                    <ItemQuote>{t(quote)}</ItemQuote>
                    <Person>
                      <ImageComponent
                        rounded
                        src={image}
                        height={'55px'}
                        width={'55px'}
                      />
                      <div style={{ padding: '0.5rem' }}>
                        <ItemName>{t(name)}</ItemName>
                        <ItemExtra>{t(extra)}</ItemExtra>
                      </div>
                    </Person>
                  </ItemWrapper>
                </Col>
              );
            })}
        </Row>
      </Fade>
    </TestimonialsSection>
  );
};

export default Testimonials;
