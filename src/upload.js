import React, { Component } from 'react';

function Upload(){
    return (
        <div>
            <form method="post" action="http://localhost:3001/upload" encType="multipart/form-data">
                <input type="text" name="title" /><br />
                <input type="file" name="wallpaper" /><br />
                <input type="submit" />
            </form>
        </div>
    );
}
 
export default Upload;