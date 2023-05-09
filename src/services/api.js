import axios from 'axios';

axios.defaults.baseURL = 'https://quintadb.com/apps/aDrGjiW5PijPOvWOWIkmok';
const API_KEY = 'ddM0hdLbrdSOxcKLWGW7iP';
const ENTITY_ID = 'dcO1ldGZ9nW7RdQcpdQmoO';

export const getAllNotes = async () => {
  try {
    const response = await axios.get(
      `dtypes/entity/dcO1ldGZ9nW7RdQcpdQmoO.json?rest_api_key=${API_KEY}&amp;view=`,
      {
        params: {
          name_value: 1,
        },
      }
    );
    return response.data.records;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const saveNote = async note => {
  try {
    const response = await axios.post('/dtypes.json', {
      values: {
        entity_id: ENTITY_ID,
        rest_api_key: API_KEY,
        id: note.id,
        cTzZhcN8jkp4oZbSoNq8o1: note.values.text,
        ddTuOyWPHhW7ldRCobW7yT: note.values.lastModified,
      },
    });

    const {
      id,
      values: { cTzZhcN8jkp4oZbSoNq8o1: text, ddTuOyWPHhW7ldRCobW7yT: lastModified },
    } = response.data.record;
    return { id, values: { text, lastModified } };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteNote = async id => {
  try {
    await axios.delete(`dtypes/${id}.json`, {
      params: {
        rest_api_key: API_KEY,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateNote = async updatedNote => {
  console.log(updatedNote);
  try {
    await axios.put(`/dtypes/${updatedNote.id}.json`, {
      rest_api_key: API_KEY,
      values: {
        cTzZhcN8jkp4oZbSoNq8o1: updatedNote.values.text,
        ddTuOyWPHhW7ldRCobW7yT: updatedNote.values.lastModified,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
