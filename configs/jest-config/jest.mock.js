import React from 'react'

export const mockUseRef = (current) => jest.spyOn(React, 'useRef')
  .mockReturnValueOnce({ current })
