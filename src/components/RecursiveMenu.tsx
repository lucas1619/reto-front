import React, { useState } from 'react';
import {MenuItem, Collapse, List, ListItemButton} from '@mui/material';
import { snakeToCamel } from '@/utility/stringUtility';

interface MenuItem {
  [key: string]: MenuItem[] | undefined;
}

interface RecursiveMenuProps {
  menuItems: MenuItem[];
  level: number;
}

const RecursiveMenu: React.FC<RecursiveMenuProps> = ({ menuItems, level }) => {
    const [open, setOpen] = React.useState<boolean[]>(Array(menuItems.length).fill(false));
    const menuObject = menuItems[0];
    const keys = Object.keys(menuObject);
    const root = level === 0;
    const handleClick = (index : number) => {
        const newOpen = [...open];
        newOpen[index] = !newOpen[index];
        setOpen(newOpen);
    };
    return (
        <div style={{
            display: root ? 'flex' : 'block',
        }}>
            {
                keys.map((key, index) => {
                    const menuItem = menuObject[key];
                    if(menuItem === undefined) return null;
                    return (
                        <List
                            key={key}
                            sx={{ 
                                bgcolor: 'background.paper',  
                                position: root ? 'relative' : 'static',
                                pl: root ? 0 : 2,
                            }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >
                            <ListItemButton className='capitalize' onClick={() => {
                                handleClick(index);
                            }}>
                                {snakeToCamel(key)}
                            </ListItemButton>
                            {
                                menuItem.length > 0 ? (
                                    <Collapse 
                                        in={open[index]} 
                                        timeout="auto" 
                                        sx={{
                                            position: root ? 'absolute' : 'static',
                                        }}
                                        unmountOnExit
                                    >
                                        <RecursiveMenu menuItems={menuItem} level={level + 1} />
                                    </Collapse>
                                ) : null
                            }
                            
                        </List>
                    )
                })
            }
        </div>
    ) 
};

export {RecursiveMenu};
