import React, { useState } from 'react'

function ServiceCard({title, description}) {
  return (
    <div>
      <h1>title :- {title}</h1>
      <h1>description :- {description}</h1>
    </div>
  )
}

export default ServiceCard
