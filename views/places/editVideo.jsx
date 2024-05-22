const React = require('react')
const Def = require('../default.jsx')

function editVideo () {
    return (
        <Def>
            <main>
                <h1>Edit Video</h1>
                <form method="POST" action={}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input id="title"
                            name="title"
                            required />
                    </div>
                    <div>
                        <label htmlFor="file">File</label>
                        <input type="url"
                            id="file"
                            name="file"
                        />
                    </div>
                </form>
            </main>
        </Def>
    )
}

module.exports = editVideo