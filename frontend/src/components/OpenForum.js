import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  background-color: #f9f9f9;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  height: 100px;
  resize: none;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: white;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #1a237e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #3f51b5;
  }
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Post = styled.div`
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 5px;
`;

const Tag = styled.span`
  background-color: #1a237e;
  color: white;
  padding: 5px;
  border-radius: 5px;
  font-size: 12px;
  margin-right: 5px;
`;

const SearchInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ddd;
  width: 100%;
`;

function OpenForum() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [category, setCategory] = useState('');
  const [hashtags, setHashtags] = useState('');
  const [location, setLocation] = useState('');
  const [notify, setNotify] = useState(false);
  const [image, setImage] = useState(null);
  const [searchLocation, setSearchLocation] = useState(''); // New state for search input

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim() || image) {
      setPosts([
        {
          text: newPost,
          category,
          hashtags: hashtags.split(',').map(tag => tag.trim()),
          location,
          notify,
          image,
          date: new Date(),
        },
        ...posts,
      ]);
      setNewPost('');
      setCategory('');
      setHashtags('');
      setLocation('');
      setNotify(false);
      setImage(null);
    }
  };

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  // Filter posts by location
  const filteredPosts = posts.filter(post =>
    post.location.toLowerCase().includes(searchLocation.toLowerCase())
  );

  return (
    <Container>
      <h1>Open Forum</h1>
      <SearchInput
        type="text"
        placeholder="Search by location"
        value={searchLocation}
        onChange={(e) => setSearchLocation(e.target.value)}
      />
      <Form onSubmit={handleSubmit}>
        <TextArea 
          value={newPost} 
          onChange={(e) => setNewPost(e.target.value)} 
          placeholder="What's happening at uni?"
        />
        <Input 
          type="file" 
          accept="image/*" 
          onChange={handleImageUpload} 
        />
        {image && <img src={image} alt="Preview" style={{ width: '100px', margin: '10px 0' }} />}
        <Select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
        >
          <option value="">Select Event Category</option>
          <option value="Free Food">Free Food</option>
          <option value="Giveaways">Giveaways</option>
          <option value="Workshops">Workshops</option>
          <option value="Social Events">Social Events</option>
          <option value="General">General</option>
        </Select>
        <Input 
          type="text" 
          value={hashtags} 
          onChange={(e) => setHashtags(e.target.value)} 
          placeholder="Add hashtags, separated by commas"
        />
        <Input 
          type="text" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
          placeholder="Add location (optional)"
        />
        <label>
          <Checkbox 
            type="checkbox" 
            checked={notify} 
            onChange={(e) => setNotify(e.target.checked)} 
          />
          Notify about important updates
        </label>
        <Button type="submit">Post</Button>
      </Form>

      <PostList>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <Post key={index}>
              {post.image && <img src={post.image} alt="Post Image" style={{ width: '100%' }} />}
              <p>{post.text}</p>
              <p><strong>Category:</strong> {post.category}</p>
              <p><strong>Location:</strong> {post.location}</p>
              <div>
                {post.hashtags.map((tag, index) => (
                  <Tag key={index}>#{tag}</Tag>
                ))}
              </div>
              <small>{post.date.toLocaleString()}</small>
              {post.notify && <p><strong>Notification:</strong> Enabled</p>}
            </Post>
          ))
        ) : (
          <p>No posts found for the location "{searchLocation}"</p>
        )}
      </PostList>
    </Container>
  );
}

export default OpenForum;
