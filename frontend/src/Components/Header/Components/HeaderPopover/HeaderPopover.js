import { Popover } from 'antd';
import React, { useState } from 'react'
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HeaderPopover = withTranslation('menu')(({Component,elmt:{id},t}) => {

    //Controle header popover closer
    const [popoverVisible, setPopoverVisible] = useState(false);

    return <Popover placement="bottom" visible={popoverVisible} onVisibleChange={visible => setPopoverVisible(visible)} content={<Component onClick={() => setPopoverVisible(false)} />} id={id}>
        <Link to='#' className='links-popover' onClick={(e) => e.preventDefault()} >{t(id+'.label')}</Link>
    </Popover>
})

export default HeaderPopover