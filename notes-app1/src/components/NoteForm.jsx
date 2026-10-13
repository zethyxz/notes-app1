import { useState } from "react"

const NoteForm = ({notes, setNotes}) => {

    const [formData, setFormData] = useState({
        title: '',
        category: 'work',
        priority: 'Medium',
        description: ''
    })

    const [isFormVisible, setIsFormVisible] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Validacion
        if (!formData.title || !formData.description) return

        // Crear el objeto de la nota
        const newNote = {id: Date.now(), ...formData}

        // Agregar notas a el estado (state)
        setNotes([newNote, ...notes])

        // Reset de campos de formData
        setFormData({
            title: '',
            category: 'Work',
            priority: 'Medium',
            description: ''
        })
    }

    return(
        <>
            <button 
                className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg 
                            cursor-pointer hover: bg-purple-200 hover: border-purple-300 trasintion mb-4"
                onClick = {()=>setIsFormVisible(!isFormVisible)}        
            >
                {isFormVisible ? 'Hide Form X' : 'Add New Note +'} 
            </button>

            { isFormVisible && (
                <form onSubmit={handleSubmit} className="mb-6">
                    <div className="mb-4">
                        <label htmlFor="" className="block-font-semibold">Title</label>
                        <input 
                            name="title"
                            type="text" 
                            className="w-full p-2 border rounded-lg" 
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="" className="block-font-semibold">Priority</label>
                        <select 
                            name="priority"
                            title="title"
                            type="text" 
                            className="w-full p-2 border rounded-lg" 
                            value={formData.priority}
                            onChange={handleChange}
                        >
                            <option value="High">🔴High</option>
                            <option value="Medium">🟠Medium</option>
                            <option value="Low">🟢Low</option>
                        </select>    
                    </div>
                    <div className="mb-4">
                        <label htmlFor="" className="block-font-semibold">Category</label>
                        <select 
                            name="category"
                            title="category"
                            type="text" 
                            className="w-full p-2 border rounded-lg" 
                            value={formData.category}
                            onChange={handleChange}
                        >
                            <option value="Work">📁Work</option>
                            <option value="Personal">🏠Personal</option>
                            <option value="Ideas">💡Ideas</option>
                        </select>    
                    </div>
                    <div className="mb-4">
                        <label htmlFor="" className="block-font-semibold">Description</label>
                        <textarea 
                            name="description"
                            type="description" 
                            className="w-full p-2 border rounded-lg" 
                            value={formData.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover: bg-purple-600">
                        📝 Add Note
                    </button>
                </form>
            )}
        </>
    )

}

export default NoteForm;