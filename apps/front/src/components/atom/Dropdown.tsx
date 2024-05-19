import * as Combobox from '~/components/ui/combobox'
import { IconButton } from '~/components/ui/icon-button'
import { Input } from '~/components/ui/input'
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'

type Option = {
  label: string,
  value: string,
}

type DropdownProps = {
  label?: string,
  placeholder: string,
  options: Option[]
}

export function Dropdown({label, placeholder, options }: DropdownProps) {
  return (
    <Combobox.Root items={options}>
      <Combobox.Label>{label}</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input placeholder={placeholder} asChild>
          <Input />
        </Combobox.Input>
        <Combobox.Trigger asChild>
          <IconButton variant="link" aria-label="open" size="xs">
            <ChevronsUpDownIcon />
          </IconButton>
        </Combobox.Trigger>
      </Combobox.Control>
      <Combobox.Positioner>
        <Combobox.Content>
          {options.map((option) => (
            <Combobox.Item key={option.value} item={option}>
              <Combobox.ItemText>{option.label}</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <CheckIcon />
              </Combobox.ItemIndicator>
            </Combobox.Item>
          ))}
        </Combobox.Content>
      </Combobox.Positioner>
    </Combobox.Root>
  )
}