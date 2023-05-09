import axios from 'axios';

axios.defaults.baseURL = 'https://quintadb.com/apps/cOkCkZBmjjFiormt0kaCkB';
const API_KEY = 'cfW4PlCmjig4yeACkRsSkg';
const ENTITY_ID = 'dcVYdcM8jgWPzjnJNdOguN';

export const getAllNotes = async () => {
  try {
    const response = await axios.get(
      `dtypes/entity/${ENTITY_ID}.json?rest_api_key=${API_KEY}&amp;view=`,
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
    const response = await axios.post(`/dtypes.json?rest_api_key=${API_KEY}`, {
      values: {
        entity_id: ENTITY_ID,
        // rest_api_key: API_KEY,
        id: note.id,
        a5W5zYWRDcV6r9W5lcJYLC: note.values.text,
        dcOGW1tNXdQQT2ysiZj8oK: note.values.lastModified,
      },
    });

    const {
      id,
      values: { a5W5zYWRDcV6r9W5lcJYLC: text, dcOGW1tNXdQQT2ysiZj8oK: lastModified },
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
