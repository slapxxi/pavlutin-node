import React from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import Icon from 'react-fontawesome';
import Tags from './Tags';
import { toHumanReadableDate } from '../utils';
import {
  Container,
  Header,
  Title,
  Meta,
  Description,
  Button,
} from './PostPreview.styled';

function PostPreview({ post, activeTag }) {
  const URL = `/blog/${post.slug}`;
  return (
    <Container>
      <Header>
        <Title>
          <Link to={URL} title={`Read ${post.title}`}>
            {post.title}
          </Link>
        </Title>
        <Meta>
          <Icon name="clock-o" /> {' '}
          {toHumanReadableDate(post.createdAt)}
        </Meta>
        <Tags
          activeTag={activeTag}
          tags={post.tags}
          className="preview__tags"
        />
      </Header>
      <Description>
        <Markdown source={post.description || "There's no description."} />
      </Description>
      <Button>
        <Link to={URL}>Keep Reading</Link>
      </Button>
    </Container>
  );
}

export default PostPreview;
