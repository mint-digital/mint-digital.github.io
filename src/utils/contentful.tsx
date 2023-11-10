import pkg from 'contentful';
const { createClient } = pkg;

const client = createClient({
  space: '8s1ond3x79i6',
  environment: 'master',
  accessToken: 'Gy4EpZZUYaap3SDFhZyIR_iCYJW4tlYR0mBB2SytqaY'
});

export const fetchCards = async () => {
  const entries = await 
    client
    .getEntries({
      content_type: 'articleCard'
    })
    .then((response) => {
      response.items.sort((a, b) => {
        return (a.fields.order as number) - (b.fields.order as number)
      });
      return response;
    })
    .catch((err) => console.log(err));
  return entries;
};


export const fetchTeam = async () => {
  const entries = await 
    client
    .getEntries({
      content_type: 'teamMember'
    })
    .then((response) => {
      response.items.sort((a, b) => {
        return (a.fields.order as number) - (b.fields.order as number)
      });
      return response;
    })
    .catch((err) => console.log(err));
  return entries;
};

export const fetchHeader = async () => {
  return await 
    client
    .getEntry('4y2uK77TPXoBl269kWOsgW')
    .then((response) => {
//      console.log("fetch " + JSON.stringify(response));
      return response.fields;
    })
    .catch((err) => console.log(err));
};

export const fetchFooter = async () => {
  return await 
    client
    .getEntry('2u6Kwb5BgzdCoO909tEE5E')
    .then((response) => {
      //      console.log("fetch " + JSON.stringify(response));
      return response.fields;
    })
    .catch((err) => console.log(err));
};


