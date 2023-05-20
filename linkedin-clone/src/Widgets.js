import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading , subtitle) => (
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon/>
            </div>

            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div className='widgets'>
    <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon/>
    </div>
    {newsArticle ('React documentry' , 'Top news - 999 readers')}
    {newsArticle ('Tesla hits new high' , 'Cars & Auto - 9099 readers')}
    {newsArticle ('Is redux is good' , 'Redux - 8990 readers')}
    {newsArticle ('What is crypto  ' , 'Crypto - 1199 readers')}
    {newsArticle ('Good & Bad Developer' , 'Developing - 9229 readers')}
    {newsArticle ('Express in MERN' , 'Mern Stack - 9063 readers')}
    </div>

  ); 
}

export default Widgets