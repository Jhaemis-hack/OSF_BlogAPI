const blogSchema = require("../server/model/blogSchema");


const landPage = async (req, res) => {
    try {
        const starredBlogs = await blogSchema.find({starred: 'true'})

        if(!starredBlogs){
            return res.status(404).json({message: 'No starred Blog found', data: []})
        }

        return res.status(200).json({ starredBlogs })
    } catch (error) {
        console.log(error.message)
    }
}

const getFInance =async (req, res) => {
    try {
        const finance = await blogSchema.findOne({category: 'finance'})

        if(!finance){
            return res.status(404).json({message: 'No finance found', data: []})
        }

        return res.status(200).json({ finance })
    } catch (error) {
        console.log(error.message)
    }
}

const getTravel =async (req, res) => {
    try {
        const travel = await blogSchema.findOne({category: 'travel'})

        if(!travel){
            return res.status(404).json({message: 'No Travel found', data: []})
        }

        return res.status(200).json({ travel })
    } catch (error) {
        console.log(error.message)
    }
}

const postBlog =async (req, res) => {
    try {
        const { category, headline, author, picTaker, story, starred } = req.body;

        if(!category || !headline || !author || !story ){
            return res.status(404).json({message: 'category, headline, author, story fields are required'})
        }

        const newTravel = new blogSchema({
            category,
            headline,
            author,
            picTaker,
            story,
            starred
        })
        await newTravel.save()

        return res.status(200).json({ newTravel })
    } catch (error) {
        console.log(error.message)
    }
}

const viewBlog = async (req, res) => {
    try {
        const id = req.params.id

        const isBlogExist = await blogSchema.findOne({_id: id})

        if(!isBlogExist){
            return res.status(404).json({message: 'Blog does not exist', data: []})
        }

        return res.status(200).json({ isBlogExist })
    } catch (err) {
        console.log(err.message)
        return res.status(404).json({ message: 'Server Error'})
    }
}

const deleteBlog = async (req, res) => {
    try {
        const id = req.params.id

        const isBlogExist = await blogSchema.findOne({_id: id})

        if(!isBlogExist){
            return res.status(404).json({message: 'Blog does not exist', data: []})
        }

        const isStarred = isBlogExist.starred

        await blogSchema.findOneAndDelete({_id: id})

        if(isStarred == "true"){
            return res.status(200).json({message: "You just deleted a starred blog", data: []})
        }
        
        return res.status(200).json({ message: 'Blog deleted successfully'})
    } catch (error) {
        console.log(error.message)
        return res.status(404).json({ message: 'Could not delete blog'})
    }  
}

const getEntertaiment =async (req, res) => {
    try {
        const entertaiment = await blogSchema.findOne({category: 'entertainment'})

        if(!entertaiment){
            return res.status(404).json({message: 'No entertainment found', data: []})
        }

        return res.status(200).json({ entertaiment })
    } catch (error) {
        console.log(error.message)
    }
}

const getRefreshment =async (req, res) => {
    try {
        const refreshment = await blogSchema.findOne({category: 'refreshment'})

        if(!refreshment){
            return res.status(404).json({message: 'No refreshment found', data: []})
        }

        return res.status(200).json({ refreshment })
    } catch (error) {
        console.log(error.message)
    }
}

const getLifeStyle =async (req, res) => {
    try {
        const lifestyle = await blogSchema.findOne({category: 'lifestyle'})

        if(!lifestyle){
            return res.status(404).json({message: 'No lifestyle found', data: []})
        }

        return res.status(200).json({ lifestyle })
    } catch (error) {
        console.log(error.message)
    }
}

const getScience =async (req, res) => {
    try {
        const science = await blogSchema.findOne({category: 'science'})

        if(!science){
            return res.status(404).json({message: 'No science found', data: []})
        }

        return res.status(200).json({ science })
    } catch (error) {
        console.log(error.message)
    }
}

const getEnvironment =async (req, res) => {
    try {
        const environment = await blogSchema.findOne({category: 'environment'})

        if(!environment){
            return res.status(404).json({message: 'No environment found', data: []})
        }

        return res.status(200).json({ environment })
    } catch (error) {
        console.log(error.message)
    }
}

const getPersonalFinance =async (req, res) => {
    try {
        const personalFinance = await blogSchema.findOne({category: 'personalfinance'})

        if(!personalFinance){
            return res.status(404).json({message: 'No personalFinance found', data: []})
        }

        return res.status(200).json({ personalFinance })
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    landPage,
    getFInance,
    getTravel,
    getEntertaiment,
    getRefreshment,
    getLifeStyle,
    getScience,
    getEnvironment,
    getPersonalFinance,
    postBlog, 
    viewBlog,
    deleteBlog,
}