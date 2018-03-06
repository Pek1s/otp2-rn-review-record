const imgUrl = (images) => {
  if (images[0]) {
    return images[0].url;
  } else {
    return 'notfound';
  }
}

export default imgUrl;