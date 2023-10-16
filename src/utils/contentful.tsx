import { createClient } from 'contentful';

const client = createClient({
  space: '8s1ond3x79i6',
  environment: 'master',
  accessToken: 'Gy4EpZZUYaap3SDFhZyIR_iCYJW4tlYR0mBB2SytqaY'
});

export const fetchCards = async () => {
  const entries = await 
    client
//    .getEntry('17dbPdw0uOJQY2MTvE1xxC')
    .getEntries({
      content_type: 'articleCard'
    })
    .then((response) => response)
    .catch((err) => console.log(err));
  return entries;
};
