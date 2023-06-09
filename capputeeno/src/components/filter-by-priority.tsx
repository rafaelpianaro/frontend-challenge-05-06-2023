import { styled } from "styled-components"
import { useState } from "react"
import { useFilter } from "@/hooks/useFilter"
import { PriorityTypes } from "@/types/priority-types"
import { ArrowIcon } from "./icons/arrow-icon"

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button {
        border: none;
        background: transparent;
        cursor: pointer;
        font-family: inherit;
        font-weight: 400;
        font-size: 10px;
        line-height: 22px;
        color: var(--text-dark);
        margin-left: 10px;

        svg {
            margin-left: 16px;
        }

        @media(min-width: ${props => props.theme.desktopBreakpoint}) {
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`

const PriorityFilter = styled.ul`
    position: absolute;
    width: 250px;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 12px 16px;
    z-index: 999;
    list-style: none;
    top: 100%;
    right: 1px;

    li {
        color: var(--text-dark);
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        cursor: pointer;
    }

    li + li {
        margin-top: 4px;
    }
`

export function FilterByPriority(){
    const [isOpen, setIsOpen] = useState(false)
    const { setPriority } = useFilter()

    const handleOpen = () => setIsOpen(prev => !prev)

    const handleUpdatePriority = (value: PriorityTypes) => {
        setPriority(value)
        // TODO click outside of box
        setIsOpen(false)
    }

    return(
        <FilterContainer>
            <button onClick={handleOpen}>
                Organizar por
                <ArrowIcon/>
            </button>
            {isOpen && 
            <PriorityFilter>
                <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
                <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - menor</li>
                <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - maior</li>
                <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
            </PriorityFilter>
        }
        </FilterContainer>
    )
}