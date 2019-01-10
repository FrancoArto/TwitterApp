
const SERVER_URL = 'http://10.160.10.118:8080'

export const GET_TIMELINE_URL = (count) => SERVER_URL + '/timeline?count=' + count;
export const GET_APPENDTWEETS_URL = (count, maxId) => SERVER_URL + '/timeline?count=' + count + '&max_id=' + maxId; 
export const GET_ARGTRENDS_URL = () => SERVER_URL + '/trends?id=23424747';
export const GET_SEARCHTWEETS_URL = (searchWord) => SERVER_URL+'/search?q=' + searchWord; 
export const GET_APPENDRESULTS_URL = (searchWord, count, maxId) => SERVER_URL+'/search?q=' + searchWord + '&count=' + count + '&max_id=' + maxId;  
export const GET_SINGLETWEET_URL = (twitID) => SERVER_URL + '/show?id=' + twitID;
export const GET_USERTIMELINE_URL = (userID, count) => SERVER_URL + '/statuses/user_time?id=' + userID + '&' + 'count=' + count;
export const GET_USERDATA_URL = (userId) => SERVER_URL + '/user?id=' + userId;
export const GET_RETWEET_URL = (twitId) => SERVER_URL + `/retweet/?id=${twitId}`;
export const GET_CURRENTUSER_URL = () => SERVER_URL + '/current_user';
export const UPLOAD_PROFILE_PICTURE_URL = () => SERVER_URL + '/update_profile_picture'

